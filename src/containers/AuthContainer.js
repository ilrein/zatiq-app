import { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';

import { CAPTURE_USER } from '../constants/types';
import { API_URL } from '../constants/config';

const AuthContainer = ({
  navigation,
  children,
  captureUser,
}) => {
  const authUser = async (creds) => {
    try {
      const post = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
      });

      const result = await post.json();

      console.log(result);
    } catch (error) {
      console.log(error); // eslint-disable-line
    }
  };

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
