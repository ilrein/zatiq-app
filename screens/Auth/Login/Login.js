import React from 'react';
import Expo from 'expo';
import Amplify, { Auth } from 'aws-amplify';
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
}) => {
  const signIn = async () => {
    // console.log(Expo);
    // return;
    const { type, token, expires } = await Expo.Facebook.logInWithReadPermissionsAsync('705885429837326', {
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // sign in with federated identity
      Auth.federatedSignIn(
        'facebook',
        { token, expires_at: expires },
        { name: 'USER_NAME' }
      )
        .then(credentials => {
          console.log('get aws credentials', credentials);
        }).catch(e => {
          console.log(e);
        });
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        Auth Stack
      </Text>
      <Button
        title="Login"
        onPress={signIn}
      />
    </View>
  );
}

Login.navigationOptions = {
  title: 'Login',
};

export default Login;