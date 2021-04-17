import React from 'react';
import {View, Text} from 'react-native';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>Loading...</Text>
    </View>
  );
};

export default Loading;
