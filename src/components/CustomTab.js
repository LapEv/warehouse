import React, { useState, useEffect } from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Easing,
  Platform,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomHeader } from '../components/CustomHeader';
import Animated from 'react-native-reanimated';
import { CONST } from '../const';

export function CustomTab({
  state,
  descriptors,
  navigation,
  position,
  iter,
  params,
}) {
  const width = useWindowDimensions().width;
  const delta = Platform.OS === 'ios' ? 240 : 160;

  const [indexState, setIndex] = useState(-1);
  const [pressButton, setPressButton] = useState(false);

  const newAnimatedValue = state.index * (-useWindowDimensions().width + delta);
  const newSetValue = (-useWindowDimensions().width + delta) * indexState;

  const location = new Animated.Value(newSetValue);

  const animate = () => {
    if (
      indexState !== state.index &&
      (iter > 1 ||
        pressButton ||
        (iter <= 1 && params && params.action === 'goback'))
    ) {
      location.setValue(newSetValue);
      Animated.timing(location, {
        toValue: newAnimatedValue,
        duration: 200,
        easing: Easing.linear,
      }).start(({ finished }) => {
        setIndex(state.index);
        setPressButton(false);
        navigation.setParams({ action: false });
      });
    }
  };

  return (
    <View>
      <CustomHeader
        navigation={navigation}
        state={state}
        location={location}
        descriptors={descriptors}
      />
      {/* <ScrollView horizontal={true}> */}
      <View
        style={{
          width: width,
          flexDirection: 'row',
          height: 130,
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#30cfd0',
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          if (isFocused) {
            useEffect(() => animate());
          }

          const onPress = () => {
            setPressButton(true);
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            setPressButton(true);
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 1 : 0.8)),
          });
          const fontSize = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 14 : 11)),
          });

          return (
            <TouchableOpacity
              title={route.routeName}
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={stylesTab.tab}
            >
              <Animated.View style={{ opacity }}>
                {options.tabBarIcon}
              </Animated.View>
              <Animated.Text style={{ opacity, fontSize, color: 'white' }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const stylesTab = StyleSheet.create({
  tab: {
    flex: 1,
    width: 110,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: 'white',
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 15,
      },
    }),
    backgroundColor: CONST.THEME.MAIN.BACKGROUNDCOLOR,
  },
});
