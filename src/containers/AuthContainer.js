import { useEffect } from 'react';
import {
  Auth,
  Cache,
} from 'aws-amplify';
import { connect } from 'react-redux';

import { CAPTURE_USER, CAPTURE_SESSION } from '../constants/types';
import { API_URL } from '../constants/config';

const AuthContainer = ({
  navigation,
  children,
  captureUser,
  captureSession,
}) => {
  const authUser = async (userParams, token) => {
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
    } catch (error) {
      console.log(error); // eslint-disable-line
    }
  };

  const isLoggedInAlready = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();

      if (currentUser) {
        const federatedInfo = await Cache.getItem('federatedInfo');
        
        const { token } = federatedInfo;

        const userParams = {
          sub: currentUser.id,
          name: currentUser.name,
        };

        captureSession(token);
        authUser(userParams, token);
        navigation.navigate('Feed');
      }
    } catch (error) {
      // user is not authenticated
      // do nothing :)
    }
  };

  useEffect(() => {
    isLoggedInAlready();
  }, []);

  return (
    children
  );
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
)(AuthContainer);
