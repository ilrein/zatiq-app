import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

import RestaurantView from '../../components/RestaurantView';
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
    <Header
      centerComponent={{ text: APP_NAME, style: { color: '#fff' } }}
      containerStyle={{
        backgroundColor: ORANGE,
      }}
    />
    {/* <Button
      title="Poke Jay"
      // onPress={() => navigation.navigate('Settings')}
    /> */}
    <RestaurantView restaurants={fakeData} />
  </View>
);

Dashboard.navigationOptions = {
  title: 'Home'
}

export default Dashboard;
