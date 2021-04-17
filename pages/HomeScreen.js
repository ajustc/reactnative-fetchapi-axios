import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Home from './Home';
import Login from './Login';
import locStorage from './services/locStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const getAllToken = () => {
    locStorage.getAllItem();
    console.log('oakwdokawd');
  };
  const getItemToken = () => {
    // locStorage.getItem('Logtoken-id');
    // locStorage.getItem('Logtoken-firstname');
    // locStorage.getItem('Logtoken-lastname');
    // locStorage.getItem('Logtoken-token');
  };
  const clear = () => {
    locStorage.clearAll();
    console.log('oakwdokawd');
  };
  const aku = locStorage.getItem('Logtoken-id');
  console.log(aku);
  // const firstname = locStorage.getItem('Logtoken-firstname');
  // const lastname = locStorage.getItem('Logtoken-lastname');
  // const token = locStorage.getItem('Logtoken-token');
  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.navbar_navbar}>Navbarrrr</Text>
        <View style={styles.navbar_akun}>
          {/* {locStorage.getItem('Logtoken-id').then(user => {
            console.log(user);
            return user === true ? (
              <Text style={styles.navbar_akunName} user={user}>
                bisaa
              </Text>
            ) : (
              <Text style={styles.navbar_akunName}>asuua8wdiawd</Text>
            );
          })} */}
          {/* {true ? (
            <Text style={styles.navbar_akunName}>asuua8wdiawd</Text>
          ) : (
            <Text style={styles.navbar_akunName}>Your Name</Text>
          )} */}
          {/* {Object.keys(aku).map(itemKey => console.log(itemKey))} */}
          <IonicIcon name="person" style={styles.navbar_akunPerson} />
        </View>
      </View>
      <ScrollView style={{paddingHorizontal: 10}}>
        <Button title="ambil 1 token" onPress={getItemToken} />
        <Button title="ambil semua token" onPress={getAllToken} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum ex
          <Button title="clear" onPress={clear} />
          veritatis quisquam asperiores quaerat nulla atque possimus ea
          doloribus? Quaerat odio nihil commodi accusamus eveniet aspernatur
          beatae quas magnam?, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam ducimus iure vitae maiores expedita culpa cum
          ipsum assumenda at nihil molestias quas incidunt nemo, esse veniam sit
          possimus iusto? Sed. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Natus eum ex veritatis quisquam asperiores quaerat
          nulla atque possimus ea doloribus? Quaerat odio nihil commodi
          accusamus eveniet aspernatur beatae quas magnam?, Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quam ducimus iure vitae maiores
          expedita culpa cum ipsum assumenda at nihil molestias quas incidunt
          nemo, esse veniam sit possimus iusto? Sed.
        </Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  navbar_navbar: {
    fontSize: 25,
  },
  navbar_akun: {
    fontSize: 20,
    flexDirection: 'row',
  },
  navbar_akunName: {
    fontSize: 17,
    alignSelf: 'center',
  },
  navbar_akunPerson: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
  scrollView: {
    backgroundColor: '#bababa',
  },
  text: {
    fontSize: 42,
  },
});
