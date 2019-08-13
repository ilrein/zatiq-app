import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  item: {
    flex: 0,
    width: '100%',
  }
});

const RestaurantView = ({
  restaurants,
}) => (
  <View style={styles.container}>
    {
      restaurants.map(restaurant => (
        <ListItem
          key={restaurant._id}
          leftAvatar={{ source: { uri: 'https://via.placeholder.com/75' } }}
          title={restaurant.name}
          subtitle={restaurant.subtitle}
          style={styles.item}
          onPress={() => {}}
        />
      ))
    }
  </View>
);

RestaurantView.propTypes = {
  restaurant: PropTypes.arrayOf(PropTypes.shape()),
};

RestaurantView.defaultProps = {
  restaurants: [],
};

export default RestaurantView;
