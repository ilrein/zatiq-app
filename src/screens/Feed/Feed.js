import React, {
  useState,
  useEffect,
} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RestaurantList from '../../components/RestaurantList';

import { API_URL } from '../../constants/config';
import { CAPTURE_RESTAURANTS } from '../../constants/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Feed = ({
  navigation,
  session,
  captureRestaurants,
  // user,
}) => {
  const [fetchingRestaurants, setFetchingRestaurants] = useState(false);
  const [haveFetchedRestaurants, setHaveFetchedRestaurants] = useState(false);
  const [restaurants, setRestaurants] = useState({});

  const getRestaurants = async () => {
    setFetchingRestaurants(true);

    try {
      const get = await fetch(`${API_URL}/restaurants`, {
        headers: {
          'Content-Type': 'application/json',
          token: session,
        },
      });

      const result = await get.json();

      setRestaurants(result);
      captureRestaurants(result);
      setHaveFetchedRestaurants(true);
    } catch (error) {
      console.log('cannot fetch restaurants', error); // eslint-disable-line
    }

    setFetchingRestaurants(false);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <View
      style={fetchingRestaurants ? styles.loading : styles.container}
    >
      {
        fetchingRestaurants
        && !haveFetchedRestaurants
          ? (
            <ActivityIndicator
              size="large"
            />
          )
          : (
            <RestaurantList
              restaurants={restaurants}
              navigation={navigation}
            />
          )
      }
    </View>
  );
};

Feed.navigationOptions = {
  title: 'Home',
};

Feed.propTypes = {
  navigation: PropTypes.shape().isRequired,
  session: PropTypes.string.isRequired,
  captureRestaurants: PropTypes.func.isRequired,
};

export default connect(
  ({ session }) => ({ session }),
  (dispatch) => ({
    captureRestaurants: (payload) => dispatch({
      type: CAPTURE_RESTAURANTS,
      payload,
    }),
  }),
)(Feed);
