import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Login = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Text>
      Auth Stack
    </Text>
    <Button
      title="Login"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
);

export default Login;