import React from 'react';
import { 
  Header,
} from 'react-native-elements';

import { ORANGE } from '../../constants/kulers';

const Restaurant = (restaurant) => (
  <Header
    // leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: ORANGE } }}
    // rightComponent={{ icon: 'home', color: '#fff' }}
  />
);

Restaurant.defaultProps = {
  restaurant: {},
};

export default Restaurant;
