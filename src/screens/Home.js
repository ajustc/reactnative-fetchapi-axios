import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({logout}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>You already logged in</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Home;
