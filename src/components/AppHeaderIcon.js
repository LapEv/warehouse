import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export const AppHeaderIconIonicons = (props) => (
  <HeaderButton
    {...props} // всё что мы захотим передать в компонент будет в props
    iconSize={props.iconSize}
    IconComponent={Ionicons}
    color={'#fff'}
  />
);

export const AppHeaderIconMaterialIcons = (props) => (
  <HeaderButton
    {...props} // всё что мы захотим передать в компонент будет в props
    iconSize={props.iconSize}
    IconComponent={MaterialIcons}
    color={'#fff'}
  />
);
