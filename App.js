import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './screens/Home';
import Settings from './screens/Settings';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings
  }
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
