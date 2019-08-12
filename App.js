import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

// Auth
import Login from './screens/Auth/Login';

// Main
import Home from './screens/Home';
import Settings from './screens/Settings';

// Login: {
//   screen: Login,
// },

const AuthStack = createStackNavigator({
  Login,
});

const AppStack = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings
  }
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(createSwitchNavigator({
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'Auth'
}));
