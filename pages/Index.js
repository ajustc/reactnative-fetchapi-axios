import React, {useState, useEffect, useCallback, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Home from './Home';
import Login from './Login';
import locStorage from './services/locStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContentScreen from './ContentScreen';
import Profile from './Profile';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const HomeScreen = ({navigation}) => {
  const [depan, setDepan] = useState('');
  const [belakang, setBelakang] = useState('');

  const [refresh, setRefresh] = useState(false);
  const onRefresh = useCallback(() => {
    setRefresh(true);
    wait(1500).then(() => setRefresh(false));
  }, []);

  const fetchUser = async () => {
    const first = await locStorage.getItem('Logtoken-firstname');
    const last = await locStorage.getItem('Logtoken-lastname');
    setDepan(first);
    setBelakang(last);
    console.log('LoggedIn :', first, last);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const Clear = () => {
    locStorage.clearAll();
    console.log('clearrr');
    navigation.navigate('Home');
  };
  // const firstname = locStorage.getItem('Logtoken-firstname');
  // const lastname = locStorage.getItem('Logtoken-lastname');
  // const token = locStorage.getItem('Logtoken-token');
  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.navbar_navbar}>Sleigh</Text>
        <View style={styles.navbar_akun}>
          {depan != null ? (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Button
                type="outline"
                raised={true}
                icon={
                  <IonicIcon size={22} name="person-circle" color={'red'} />
                }></Button>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Button
                type="outline"
                raised={true}
                icon={
                  <IonicIcon size={22} name="person" color={'red'} />
                }></Button>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ScrollView
        style={{paddingHorizontal: 10}}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <Button title="Apus dulu bray" onPress={Clear} />
        <ContentScreen />
      </ScrollView>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs(depan) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: null,
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? 'salmon' : color,
                fontSize: 12,
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused, color}) => (
            <FeatherIcon
              style={{color: focused ? 'salmon' : color}}
              name="home"
              size={22}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerShown: null,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: null,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: null,
        }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

const Index = () => {
  return (
    <View style={([styles.container], {flexDirection: 'row', height: '100%'})}>
      <NavigationContainer ref={createRef()}>
        <MyStack />
      </NavigationContainer>
    </View>
  );
};

export default Index;

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
    fontSize: 22,
    marginTop: 4,
  },
  navbar_akunPerson: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
    borderColor: 'red',
    borderWidth: 100,
  },
  scrollView: {
    backgroundColor: '#bababa',
  },
  text: {
    fontSize: 42,
  },
});
