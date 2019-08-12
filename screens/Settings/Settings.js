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

const AnotherScreen = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Button
      title="Hello, World"
      onPress={() => navigation.goBack()}
    />
  </View>
);

export default AnotherScreen;
