import React, { useState } from 'react';
import * as Facebook from 'expo-facebook';
import { Auth } from 'aws-amplify';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CAPTURE_USER, CAPTURE_SESSION } from '../../../constants/types';
import { API_URL } from '../../../constants/config';

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
  captureSession,
}) => {
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    
    const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync(
      process.env.FB_APP_ID, {
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
        .then(async (credentials) => {
          const userParams = {
            sub: credentials._identityId,
            name,
          };
          
          try {
            const post = await fetch(`${API_URL}/customers`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token,
              },
              body: JSON.stringify({
                customer: userParams,
              }),
            });
      
            const result = await post.json();
            captureUser(result);
            captureSession(token);
          } catch (error) {
            console.log(error); // eslint-disable-line
          }
          setLoading(false);
          navigation.navigate('Feed');
        }).catch((e) => {
          console.log(e); // eslint-disable-line
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
  header: null,
};

Login.propTypes = {
  navigation: PropTypes.shape().isRequired,
  captureUser: PropTypes.func.isRequired,
  captureSession: PropTypes.func.isRequired,
};

export default connect(
  null,
  (dispatch) => ({
    captureUser: (payload) => dispatch({
      type: CAPTURE_USER,
      payload,
    }),
    captureSession: (payload) => dispatch({
      type: CAPTURE_SESSION,
      payload,
    }),
  }),
)(Login);
