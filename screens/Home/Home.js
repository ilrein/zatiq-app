import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Button
      title="Poke Jay"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);

export default Home;