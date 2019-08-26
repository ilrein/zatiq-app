import { useEffect } from 'react';
import { Auth, Cache } from 'aws-amplify';
import { connect } from 'react-redux';

import { CAPTURE_USER } from '../constants/types';
import { API_URL } from '../constants/config';

const AuthContainer = ({
  navigation,
  children,
  captureUser,
}) => {
  const authUser = async (userParams) => {
    try {
      const post = await fetch(`${API_URL}/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'jwt-token': userParams.token,
        },
        body: JSON.stringify({
          customer: userParams,
        }),
      });

      const result = await post.json();

      console.log(result); // eslint-disable-line
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
          ...currentUser,
          token,
        };

        authUser(currentUser);

        captureUser(userParams);
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
