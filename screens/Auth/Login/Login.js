import React from 'react';
import * as Facebook from 'expo-facebook';
import { Auth } from 'aws-amplify';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
// import { withOAuth } from 'aws-amplify-react';

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
    const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync(
      '705885429837326', {
        permissions: ['public_profile', 'email'],
        // behavior: 'native',
      }
    );

    if (type === 'success') {
      console.log(type);

      navigation.navigate('Dashboard');

      // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      // const { name } = await response.json();
      // console.log(name);
      // // // return

      // Auth.federatedSignIn(
      //   'facebook',
      //   { token, expires_at: expires },
      //   { name }
      // )
      //   .then(credentials => {
      //     console.log('get aws credentials', credentials);
      //   }).catch(e => {
      //     console.log(e);
      //   });
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
