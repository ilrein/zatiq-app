import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
// import { withAuthenticator } from 'aws-amplify-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Dashboard = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Button
      title="Poke Jay"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);

export default Dashboard;
