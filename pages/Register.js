import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Login from './Login';
import Axios from 'axios';

const Register = ({navigation}) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitRegister = () => {
    console.log('registerrrr');
    const data = {
      firstname,
      lastname,
      email,
      password,
    };
    console.log(data);
    Axios.post(
      'http://192.168.1.10/ci4_auth_jwt/public/auth/register',
      data,
    ).then(res => {
      console.log('resss', res.data);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register Pages</Text>
      <TextInput
        style={styles.input}
        placeholder={'Firstname'}
        placeholderTextColor="pink"
        onChangeText={firstname => setFirstname(firstname)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Lastname'}
        placeholderTextColor="pink"
        onChangeText={lastname => setLastname(lastname)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor="pink"
        keyboardType={'email-address'}
        onChangeText={email => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        placeholderTextColor="pink"
        secureTextEntry
        onChangeText={password => setPassword(password)}
      />
      <Button title="Register" onPress={submitRegister} style={styles.button} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Already have account? Sign</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
