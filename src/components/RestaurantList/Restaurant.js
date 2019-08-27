import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Storage } from 'aws-amplify';
import PropTypes from 'prop-types';

import { ORANGE } from '../../constants/kulers';

const Restaurant = ({ restaurant, navigation }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getImage = async (uri) => {
    setLoading(true);
    const file = await Storage.get(uri);
    setImage(file);
    setLoading(false);
  };

  useEffect(() => {
    if (restaurant._id) {
      getImage(restaurant.image);
    }
  }, [restaurant._id]);

  return (
    loading
      ? (
        null
      )
      : (
        <Card
          image={{ uri: image }}
          title={restaurant.name}
        >
          <Text style={{ marginBottom: 10 }}>
            {restaurant.description}
          </Text>
          <Button
            title="Eat Here!"
            onPress={() => navigation.navigate('Restaurant', {
              restaurant,
            })}
            buttonStyle={{
              backgroundColor: ORANGE,
            }}
          />
        </Card>
      )
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape().isRequired,
  navigation: PropTypes.shape().isRequired,
};

export default Restaurant;
