import React from 'react';
import { View, Text } from 'react-native';
import { 
  Header,
  Button,
} from 'react-native-elements';

import { ORANGE } from '../../constants/kulers';

const Restaurant = ({ navigation }) => {
  const restaurant = navigation.getParam('restaurant');

  console.log(restaurant);

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'add',
          color: '#fff',
          onPress: () => navigation.navigate('Dashboard'),
        }}
        centerComponent={{
          text: restaurant.name,
          style: { color: 'white' },
        }}
        containerStyle={{
          backgroundColor: ORANGE,
        }}
      />
      <Text>
        {restaurant.description}
      </Text>
      <Button
        title="Step 2"
        onPress={() => navigation.navigate('Reserve')}
      />
    </View>
  );
}

Restaurant.defaultProps = {
  restaurant: {},
};

export default Restaurant;
