import React, { useState } from 'react';
import * as Facebook from 'expo-facebook';
import { Auth } from 'aws-amplify';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CAPTURE_USER } from '../../../constants/types';
import { APP_NAME, API_URL } from '../../../constants/config';

import AuthContainer from '../../../containers/AuthContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '90%',
  },
  iconFormat: {
    marginRight: 20,
  },
});

const Login = ({
  navigation,
  captureUser,
}) => {
  const [loading, setLoading] = useState(false);

  // const authUser = async (creds) => {
  //   try {
  //     const post = await fetch(API_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',

  //       },
  //     });

  //     const result = await post.json();

  //     console.log(result);
  //   } catch (error) {
  //     console.log(error); // eslint-disable-line
  //   }
  // };

  const signIn = async () => {
    setLoading(true);
    
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
          // console.log(credentials);

          // const payload = {
          //   sessionToken: credentials.sessionToken,
          //   sub: credentials.data.IdentityId,
          //   name,
          // };

          // console.log(payload);

          // authUser(payload);

          setLoading(false);
          navigation.navigate('Feed');
        }).catch((e) => {
          console.log(e);
          setLoading(false);
        });
    }
  };

  return (
    <AuthContainer navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Login with Facebook"
            onPress={signIn}
            loading={loading}
            icon={(
              <Icon
                name="facebook-f"
                size={20}
                color="white"
                style={styles.iconFormat}
              />
            )}
          />
        </View>
      </View>
    </AuthContainer>
  );
};

Login.navigationOptions = {
  title: APP_NAME,
};

Login.propTypes = {
  navigation: PropTypes.shape().isRequired,
  captureUser: PropTypes.func.isRequired,
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
