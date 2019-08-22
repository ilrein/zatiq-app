import React from 'react';
import { View, Text } from 'react-native';
import { 
  Button,
} from 'react-native-elements';

import { ORANGE } from '../../../constants/kulers';

const Reserve = ({ navigation }) => {
  // const restaurant = navigation.getParam('restaurant');

  // console.log(restaurant);

  return (
    <View>
      <Text>
        Lorem Ipsum
      </Text>
      <Button
        title="Confirm"
        buttonStyle={{
          backgroundColor: ORANGE,
        }}
        // onPress={() => navigation.navigate('')}
      />
    </View>
  );
}

Reserve.defaultProps = {
  restaurant: {},
};

export default Reserve;
