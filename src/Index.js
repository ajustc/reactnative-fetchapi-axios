import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//importing screens
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import LoadScreen from './screens/Loading';

const Stack = createStackNavigator();
const Index = () => {
  const [foundToken, setFoundToken] = useState('');
  const [isLoad, setIsLoad] = useState(true);

  const checkToken = async () => {
    try {
      let findingToken = await AsyncStorage.getItem('token');
      setFoundToken(findingToken);
      setIsLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loginAction = async () => {
    //Proses post login form untuk mendapat token/ semacamnya
    let dummyToken = 'CodeSeemToken';

    try {
      await AsyncStorage.setItem('token', dummyToken);
      setFoundToken(dummyToken);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutAction = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setFoundToken('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {foundToken ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} logout={logoutAction} />}
          </Stack.Screen>
        ) : isLoad ? (
          <Stack.Screen name="Load" options={{headerShown: false}}>
            {props => <LoadScreen {...props} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} login={loginAction} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
