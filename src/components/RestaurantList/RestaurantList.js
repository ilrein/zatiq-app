import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Restaurant from './Restaurant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  item: {
    flex: 0,
    width: '100%',
  },
});

const RestaurantList = ({
  restaurants,
  navigation,
}) => (
  restaurants
  && restaurants.docs
    ? (
      <ScrollView style={styles.container}>
        {
          restaurants.docs.map((restaurant) => (
            <Restaurant
              key={restaurant._id}
              restaurant={restaurant}
              navigation={navigation}
            />
          ))
        }
      </ScrollView>
    )
    : null
);

RestaurantList.propTypes = {
  restaurants: PropTypes.shape().isRequired,
  navigation: PropTypes.shape().isRequired,
};

RestaurantList.defaultProps = {};

// RestaurantList.navigationOptions = {
// };

export default RestaurantList;
