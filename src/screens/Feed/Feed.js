import React, {
  useEffect,
} from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RestaurantList from '../../components/RestaurantList';

import { API_URL } from '../../constants/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Feed = ({
  navigation,
  user,
}) => {
  const getRestaurants = async () => {
    console.log('get restaurants');
    // try {
    //   const get = fetch(`${API_URL}/restaurants`);

    //   const result = await get.json();

    //   console.log(result);
    // } catch (error) {
    //   console.log(error); // eslint-disable-line
    // }
  };

  useEffect(() => {
    getRestaurants();
  }, [user.id]);

  return (
    <View style={styles.container}>
      {/* <RestaurantList
        restaurants={fakeData}
        navigation={navigation}
      /> */}
    </View>
  );
};

Feed.navigationOptions = {
  title: 'Home',
};

Feed.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default connect(
  ({ user }) => ({ user }),
)(Feed);
