import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import { ORANGE } from '../../constants/kulers';

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
}) => { // eslint-disable-line
  // console.log(restaurants, restaurants.docs); 
  return (
    restaurants
    && restaurants.docs
      ? (
        <ScrollView style={styles.container}>
          {
            restaurants.docs.map((restaurant) => (
              <Card
                key={restaurant._id}
                image={{ uri: 'https://via.placeholder.com/150' }}
                title={restaurant.name}
                onPress={() => console.log('test')}
              >
                <Text style={{ marginBottom: 10 }}>
                  {restaurant.description}
                </Text>
                <Button
                  title="Eat Here"
                  onPress={() => navigation.navigate('Restaurant', {
                    restaurant,
                  })}
                  buttonStyle={{
                    backgroundColor: ORANGE,
                  }}
                />
              </Card>
            ))
          }
        </ScrollView>
      )
      : null
  );
};

RestaurantList.propTypes = {
  restaurants: PropTypes.shape().isRequired,
  navigation: PropTypes.shape().isRequired,
};

RestaurantList.defaultProps = {};

// RestaurantList.navigationOptions = {

// };

export default RestaurantList;
