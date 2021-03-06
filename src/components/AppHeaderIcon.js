import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { CONST } from '../const';

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props} // всё что мы захотим передать в компонент будет в props
    iconSize={30}
    IconComponent={Ionicons}
    color={'#fff'}
  />
);
