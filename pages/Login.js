import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './Register';
import Axios from 'axios';
import locStorage from './services/locStorage';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitLogin = () => {
    console.log('oawkdokaowd sabi');
    const data = {
      email,
      password,
    };
    console.log(data);
    Axios.post('http://192.168.1.10/ci4_auth_jwt/public/auth/login', data)
      .then(res => {
        console.log('res', res.data);
        console.log('res', res.data.user_id);
        console.log('res', res.data.user_firstname);
        console.log('res', res.data.user_lastname);
        console.log('res', res.data.user_token);
        locStorage.saveItem('Logtoken-id', res.data.user_id);
        locStorage.saveItem('Logtoken-firstname', res.data.user_firstname);
        locStorage.saveItem('Logtoken-lastname', res.data.user_lastname);
        locStorage.saveItem('Logtoken-token', res.data.user_token);
        // locStorage.saveItem(`Logtoken : ${res.data.user_id}`, res.data.user_firstname);
        // locStorage.saveItem(`Logtoken : ${res.data.user_id}`, res.data.user_lastname);
        // locStorage.saveItem(`Logtoken : ${res.data.user_id}`, res.data.token);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Pages</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="pink"
        keyboardType={'email-address'}
        onChangeText={email => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="pink"
        secureTextEntry
        onChangeText={password => setPassword(password)}
      />
      <Button title="Login" onPress={submitLogin} style={styles.button} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Already have account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const Login = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fefecc',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 8,
    color: 'black',
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#2929',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
});
