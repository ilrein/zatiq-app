import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import RestaurantView from '../../components/RestaurantView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingBottom: 20,
  },
});

const fakeData = [
  {
    _id: '123',
    name: "Place",
    subtitle: '123 Front St'
  },
  {
    _id: '124',
    name: "Pad",
    subtitle: '456 Front St'
  }
];

const Dashboard = ({
  navigation,
}) => (
  <View style={styles.container}>
    {/* <Button
      title="Poke Jay"
      // onPress={() => navigation.navigate('Settings')}
    /> */}
    <RestaurantView restaurants={fakeData} />
  </View>
);

export default Dashboard;
