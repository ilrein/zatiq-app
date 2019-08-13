import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  item: {
    flex: 0,
    width: '100%',
  }
});

const RestaurantList = ({
  restaurants,
  navigation,
}) => (
  <ScrollView style={styles.container}>
    {
      restaurants.map(restaurant => (
        <Card
          key={restaurant._id}
          image={{ uri: 'https://via.placeholder.com/150' }}
          title={restaurant.name}
          onPress={() => { console.log('test')}}
        >
          <Text style={{ marginBottom: 10 }}>
            {restaurant.description}
          </Text>
          <Button
            title="Eat Here"
            onPress={() => navigation.navigate('Restaurant', {
              restaurant,
            })}
          />
        </Card>
      ))
    }
  </ScrollView>
);

RestaurantList.propTypes = {
  restaurant: PropTypes.arrayOf(PropTypes.shape()),
};

RestaurantList.defaultProps = {
  restaurants: [],
};

// RestaurantList.navigationOptions = {

// };

export default RestaurantList;
