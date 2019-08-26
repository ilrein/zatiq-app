import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';

import { CAPTURE_USER } from '../constants/types';

const AuthContainer = ({
  navigation,
  children,
  captureUser,
}) => {
  const isLoggedInAlready = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();

      if (currentUser) {
        console.log(currentUser);
        captureUser(currentUser);
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
  }),
)(AuthContainer);
