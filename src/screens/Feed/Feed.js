import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import RestaurantList from '../../components/RestaurantList';

import { API_URL } from '../../constants/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const fakeData = [
  {
    _id: '123',
    name: 'Place',
    address: '123 Front St',
    description: 'Lorem ipsum hello world extra alphabet',
  },
  {
    _id: '124',
    name: 'Pad',
    address: '456 Front St',
    description: 'Lorem ipsum hello world extra alphabet, lorem ipsum hello world extra alphabet. lorem ipsum hello world extra alphabet, lorem ipsum hello world extra alphabet.',
  },
];

const Feed = ({
  navigation,
}) => {
  const getRestaurants = async () => {
    // fetch(API_URL)
  };

  return (
    <View style={styles.container}>
      <RestaurantList
        restaurants={fakeData}
        navigation={navigation}
      />
    </View>
  );
};

Feed.navigationOptions = {
  title: 'Home',
};

Feed.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default Feed;
