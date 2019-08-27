import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Amplify, { Auth, Cache } from 'aws-amplify';
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

const refreshToken = async () => {
  const federatedInfo = await Cache.getItem('federatedInfo');
  
  const { token, expires_at } = federatedInfo;

  return new Promise((response) => {
    const data = {
      token, // the token from the provider
      expires_at,
    }
    response(data);
  });
}

Auth.configure({
  refreshHandlers: {
    'facebook': refreshToken,
  },
});

// Authentication related screens
// all on the opening areas
const AuthStack = createStackNavigator({
  Login,
});

// Once you are authenticated
// all the "inside" screens
const DetailsStack = createStackNavigator({
  Feed,
  Restaurant,
  Reserve,
}, {
  initialRouteName: 'Feed',
});

// "inside" screens nested into a tab navigator
const TabStack = createBottomTabNavigator({
  Home: DetailsStack,
  Settings,
}, {
  initialRouteName: 'Home',
});

// the root navigator which combines auth + inside tabs
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

