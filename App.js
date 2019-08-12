import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Amplify from 'aws-amplify';

// Auth
import Login from './screens/Auth/Login';

// Main
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';

// Amplify setup
import AWSExports from './aws-exports'

Amplify.configure(AWSExports);

const AuthStack = createStackNavigator({
  Login,
});

const AppStack = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Settings: {
    screen: Settings
  }
}, {
  initialRouteName: 'Dashboard',
});

export default createAppContainer(createSwitchNavigator({
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'Auth'
}));
