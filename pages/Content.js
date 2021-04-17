/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Axios from 'axios';

const Content = () => {
  // getData
  const [getUsers, setUsers] = useState({
    firstname: '',
    lastname: '',
  });
  // postData
  const [getPost, setPost] = useState({
    username: '',
    firstname: '',
    lastname: '',
    address: '',
    age: null,
    password: '',
  });

  const getData = () => {
    //   PAKE FETCH
    // fetch('http://192.168.1.10/4ci4/restful/public/users/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setUsers(json);
    //   });
    // PAKE AXIOS
    Axios.get('http://192.168.1.10/4ci4/restful/public/users/1')
      .then(result => {
        setUsers(result.data);
      })
      .catch(err => console.log('errorrr : ', err));
  };

  const postData = () => {
    const dataforAPI = {
      username: 'Testing',
      firstname: 'Rio',
      lastname: 'Testing',
      address: 'Test',
      age: 21,
      password: '123',
    };
    // fetch('http://192.168.1.10/4ci4/restful/public/users', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: {
    //     username: 'Testing',
    //     firstname: 'Rio',
    //     lastname: 'Testing',
    //     address: 'Test',
    //     age: 21,
    //     password: '123',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     alert(JSON.stringify(json));
    //     console.log('post responseee: ', json);
    //     setPost(json);
    //   });
    const params = new URLSearchParams();
    params.append('username', 'fix_final_norev');
    params.append('firstname', 'testggggg');
    params.append('lastname', 'testggggg');
    params.append('address', 'testggggg');
    params.append('age', 123);
    params.append('password', '123');
    Axios.post('http://192.168.1.10/4ci4/restful/public/users/create', params)
      .then(result => {
        setPost(result.data);
      })
      .catch(err => console.log('errrorr : ', err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CALL API</Text>
      {/* GET */}
      <Button title="Get Data" onPress={getData} />
      <Text>Response Get Data</Text>
      <View style={styles.column}>
        <Text>{getUsers.firstname}</Text>
        <Text>{getUsers.lastname}</Text>
      </View>
      <View style={styles.line} />
      {/* POST */}
      <Button title="Post Data" onPress={postData} />
      <Text>Response Post Data</Text>
      <Text>{getPost.username}</Text>
      <Text>{getPost.firstname}</Text>
      <Text>{getPost.lastname}</Text>
      <Text>{getPost.address}</Text>
      <Text>{getPost.age}</Text>
      <Text>{getPost.password}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {padding: 20},
  column: {paddingHorizontal: 40},
  textTtle: {textAlign: 'center', marginHorizontal: 20, marginVertical: 'auto'},
  line: {height: 2, backgroundColor: 'grey', marginVertical: 20},
});
