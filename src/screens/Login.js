import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = ({login}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>You haven't logged in yet</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default Login;
