import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

import RestaurantList from '../../components/RestaurantList';
import { ORANGE } from '../../constants/kulers';
import { APP_NAME } from '../../constants/app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
});

const fakeData = [
  {
    _id: '123',
    name: "Place",
    address: '123 Front St',
    description: 'Lorem ipsum hello world extra alphabet',
  },
  {
    _id: '124',
    name: "Pad",
    address: '456 Front St',
    description: 'Lorem ipsum hello world extra alphabet, lorem ipsum hello world extra alphabet. lorem ipsum hello world extra alphabet, lorem ipsum hello world extra alphabet.',
  }
];

const Dashboard = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Header
      centerComponent={{ text: APP_NAME, style: { color: '#fff' } }}
      containerStyle={{
        backgroundColor: ORANGE,
      }}
    />
    <RestaurantList
      restaurants={fakeData}
      navigation={navigation}
    />
  </View>
);

Dashboard.navigationOptions = {
  title: 'Home'
}

export default Dashboard;
