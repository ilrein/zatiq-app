import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import { ORANGE } from '../../constants/kulers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  item: {
    flex: 0,
    width: '100%',
  }
});

const MenusList = ({
  menus,
  // navigation,
}) => (
  <ScrollView style={styles.container}>
    {
      menus.map(menu => (
        <Text style={{ marginBottom: 10 }}>
          {menu.name}
        </Text>
      ))
    }
  </ScrollView>
);

MenusList.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape()),
};

MenusList.defaultProps = {
  menus: [],
};

// MenusList.navigationOptions = {

// };

export default MenusList;
