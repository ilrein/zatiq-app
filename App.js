import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';

// Auth
import Login from './src/screens/Auth/Login';

// Main
import Feed from './src/screens/Feed';
import Settings from './src/screens/Settings';

// Subpages
import Restaurant from './src/screens/Restaurant';
import Reserve from './src/screens/Restaurant/Reserve';

// Amplify setup
import AWSExports from './src/aws-exports'

// Store
import configureStore from './src/store';

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

