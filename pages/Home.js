import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Axios from 'axios';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.avatar}
          source={{uri: `https://i.pravatar.cc/80?img=${name}`}}
        />
      </TouchableOpacity>
      <View style={styles.deks}>
        <Text style={styles.deksNama}>{name}</Text>
        <Text style={styles.deksEmail}>{email}</Text>
        <Text style={styles.deksBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
const Home = () => {
  // CREATE
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  const [getUser, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // CREATE
  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    if (button === 'Simpan') {
      Axios.post('http://192.168.1.10:3004/users', data).then(res => {
        console.log(('res: ', res));
        // hapus setelah submit
        setName('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (button === 'Update') {
      Axios.put(`http://192.168.1.10:3004/users/${selectedUser.id}`, data).then(
        res => {
          console.log(('res: ', res));
          // hapus setelah submit
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        },
      );
    }
  };

  // READ
  const getData = () => {
    Axios.get('http://192.168.1.10:3004/users').then(res => {
      console.log('res: ', res);
      setUser(res.data);
    });
  };

  // PUT (UPDATE)
  const selectItem = item => {
    console.log('selectItem :', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  // DELETE
  const deleteItem = item => {
    console.log(item);
    Axios.delete(`http://192.168.1.10:3004/users/${item.id}`).then(res => {
      console.log('res delete: ', res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>UI Ga Tu</Text>
      <Text>Masukkan Akun Anda</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}></TextInput>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}></TextInput>
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={value => setBidang(value)}></TextInput>
      <Button title={button} onPress={submit}></Button>
      <View style={styles.line} />
      {getUser.map(user => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert('Peringatan', 'Anda yakin menghapus?', [
                {
                  text: 'Tidak',
                  onPress: () => console.log('button tidak'),
                },
                {
                  text: 'Ya',
                  onPress: () => deleteItem(user),
                },
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {padding: 20},
  column: {paddingHorizontal: 40},
  textTtle: {textAlign: 'center', marginBottom: 50},
  input: {
    borderWidth: 1,
    borderRadius: 2,
    marginVertical: 10,
    paddingHorizontal: 18,
  },
  avatar: {width: 80, height: 80, borderRadius: 80},
  itemContainer: {flexDirection: 'row', marginTop: 18},
  deks: {marginLeft: 15, flex: 1},
  deksNama: {fontSize: 20, fontWeight: 'bold'},
  deksEmail: {fontSize: 16},
  deksBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 25, fontWeight: 'bold', color: 'red'},
});
