import React from 'react';
import { View, Text } from 'react-native';
import { 
  Button,
} from 'react-native-elements';

import { ORANGE } from '../../constants/kulers';

const Restaurant = ({ navigation }) => {
  const restaurant = navigation.getParam('restaurant');

  console.log(restaurant);

  return (
    <View>
      <Text>
        {restaurant.description}
      </Text>
      <Button
        title="Step 2"
        onPress={() => navigation.navigate('Reserve')}
        buttonStyle={{
          backgroundColor: ORANGE,
        }}
      />
    </View>
  );
}

Restaurant.defaultProps = {
  restaurant: {},
};

Restaurant.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('restaurant').name,
});

export default Restaurant;
