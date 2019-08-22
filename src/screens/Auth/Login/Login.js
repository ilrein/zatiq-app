import React, { useEffect } from 'react';
import * as Facebook from 'expo-facebook';
import { Auth } from 'aws-amplify';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { CAPTURE_USER } from '../../../constants/types';

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
  captureUser,
}) => {
  const isLoggedInAlready = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();

      if (currentUser) {
        console.log(currentUser);
        navigation.navigate('Feed');
      }
    } catch (error) {
      // user is not authenticated
      // do nothing
    }
  };

  useEffect(() => {
    isLoggedInAlready();
  }, []);

  const signIn = async () => {
    const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync(
      '705885429837326', {
        permissions: ['public_profile', 'email'],
      },
    );

    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const { name } = await response.json();

      Auth.federatedSignIn(
        'facebook',
        { token, expires_at: expires },
        { name },
      )
        .then((credentials) => {
          captureUser(credentials);
          navigation.navigate('Feed');
        }).catch(e => {
          console.log(e);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={signIn}
      />
    </View>
  );
};

Login.navigationOptions = {
  title: 'Login',
};

export default connect(
  null,
  (dispatch) => ({
    captureUser: (payload) => dispatch({
      type: CAPTURE_USER,
      payload,
    }),
  }),
)(Login);
