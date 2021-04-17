import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import locStorage from './services/locStorage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Index from './Index';

const ProfileScreen = ({navigation}) => {
  const logout = () => {
    console.log('logouttt');
    locStorage.clearAll();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity onPress={logout}>
        <Text style={styles.logout}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logout: {
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#ee9299',
    padding: 20,
    width: 300,
    marginTop: 300,
  },
});
