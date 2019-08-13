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
import Feed from './screens/Feed';
import Settings from './screens/Settings';

// Subpages
import Restaurant from './screens/Restaurant';
import Reserve from './screens/Restaurant/Reserve';

// Amplify setup
import AWSExports from './aws-exports'

// Store
import configureStore from './store';

const store = configureStore();

Amplify.configure(AWSExports);

const AuthStack = createStackNavigator({
  Login,
});

const DetailsStack = createStackNavigator({
  Feed,
  Restaurant,
  Reserve,
}, {
  initialRouteName: 'Feed',
});

const TabStack = createBottomTabNavigator({
  Home: DetailsStack,
  Settings,
}, {
  initialRouteName: 'Home',
});

const Navigation = createAppContainer(createSwitchNavigator({
  Auth: AuthStack,
  App: TabStack,
}, {
  initialRouteName: 'Auth'
}));

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;

