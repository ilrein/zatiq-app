import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Amplify from 'aws-amplify';
import { connect, Provider } from 'react-redux';

// Auth
import Login from './screens/Auth/Login';

// Main
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';

// Amplify setup
import AWSExports from './aws-exports'

// Store
import configureStore from './store';

const store = configureStore();

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

const Navigation = createAppContainer(createSwitchNavigator({
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'App'
}));

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;

