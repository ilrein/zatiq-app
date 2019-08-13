import React from 'react';
import { View, Text } from 'react-native';
import { 
  Header,
  Button,
} from 'react-native-elements';

import { ORANGE } from '../../../constants/kulers';

const Reserve = ({ navigation }) => {
  // const restaurant = navigation.getParam('restaurant');

  // console.log(restaurant);

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'add',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'Make Reserve',
          style: { color: 'white' },
        }}
        containerStyle={{
          backgroundColor: ORANGE,
        }}
      />
      <Text>
        Lorem Ipsum
      </Text>
      <Button
        title="Confirm"
        // onPress={() => navigation.navigate('')}
      />
    </View>
  );
}

Reserve.defaultProps = {
  restaurant: {},
};

export default Reserve;
