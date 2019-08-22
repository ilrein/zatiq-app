import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Auth } from 'aws-amplify';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Settings = ({
  navigation,
}) => {
  const logOut = () => {
    Auth.signOut()
      .then(() => navigation.navigate('Login'))
      .catch(e => Alert.alert(JSON.stringify(e)))
  }
    
  return (
    <View style={styles.container}>
      <Button
        title="Logout"
        onPress={logOut}
      />
    </View>
  );
};

export default Settings;
