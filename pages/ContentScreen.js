import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

const Produk = ({namaproduk, fotoproduk, hargaproduk}) => {
  return (
    <View style={styles.col}>
      <TouchableOpacity>
        <Image
          style={styles.display_avatar}
          source={{uri: `https://i.pravatar.cc/80?img=${fotoproduk}`}}
        />
        <View style={styles.display_item}>
          <Text style={styles.display_item_produk}>{namaproduk}</Text>
          <View style={styles.display_item_detil}>
            <Text style={styles.item_harga}>Rp {hargaproduk}</Text>
            <Text style={styles.item_terjual}>100 terjual</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ContentScreen = () => {
  // const tabBarHeight = Platform.OS === 'android' ? 50 : 70;
  // const [foto, setFoto] = useState('');
  // const [produk, setProduk] = useState('');
  // const [harga, setHarga] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([]);

  const getAll = () => {
    Axios.get('http://192.168.1.10/ci4_auth_jwt/public/service/getall').then(
      res => {
        const asu = res.data.data;
        // setData(res.data.data);
        setData(res.data.data);
        console.log(res.data);
        // asu.forEach(ele => {
        //   // console.log(ele.id_produk);
        //   // console.log(ele.harga_produk);
        //   // console.log(ele.foto_produk);
        //   // console.log(ele.nama_produk);
        //   // console.log(ele.id_produk);
        //   // setData(ele.id_produk);
        // });
      },
    );
  };

  useEffect(() => {
    getAll();
  }, []);

  // console.log(data[0].id_produk);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getAll}>
        <Text style={styles.button}>GetAll</Text>
      </TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.item_heading}>Produk</Text>
      </View>
      <Text>{data.id_produk}</Text>
      <View style={styles.row}>
        {data.map(produk => {
          return (
            <Produk
              key={produk.id_produk}
              namaproduk={produk.nama_produk}
              fotoproduk={produk.foto_produk}
              hargaproduk={produk.harga_produk}
            />
          );
        })}
        {/* <View style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.display_avatar}
              source={{uri: `https://i.pravatar.cc/80?img=13`}}
            />
            <View style={styles.display_item}>
              <Text style={styles.display_item_produk}>Nama Produk</Text>
              <View style={styles.display_item_detil}>
                <Text style={styles.item_harga}>Rp240.000</Text>
                <Text style={styles.item_terjual}>100 terjual</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
      {/* <View style={styles.row}>
        <View style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.display_avatar}
              source={{uri: `https://i.pravatar.cc/80?img=14`}}
            />
            <View style={styles.display_item}>
              <Text style={styles.display_item_produk}>Nama Produk</Text>
              <View style={styles.display_item_detil}>
                <Text style={styles.item_harga}>Rp240.000</Text>
                <Text style={styles.item_terjual}>100 terjual</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.display_avatar}
              source={{uri: `https://i.pravatar.cc/80?img=15`}}
            />
            <View style={styles.display_item}>
              <Text style={styles.display_item_produk}>Nama Produk</Text>
              <View style={styles.display_item_detil}>
                <Text style={styles.item_harga}>Rp240.000</Text>
                <Text style={styles.item_terjual}>100 terjual</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.display_avatar}
              source={{uri: `https://i.pravatar.cc/80?img=16`}}
            />
            <View style={styles.display_item}>
              <Text style={styles.display_item_produk}>Nama Produk</Text>
              <View style={styles.display_item_detil}>
                <Text style={styles.item_harga}>Rp240.000</Text>
                <Text style={styles.item_terjual}>100 terjual</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.display_avatar}
              source={{uri: `https://i.pravatar.cc/80?img=17`}}
            />
            <View style={styles.display_item}>
              <Text style={styles.display_item_produk}>Nama Produk</Text>
              <View style={styles.display_item_detil}>
                <Text style={styles.item_harga}>Rp240.000</Text>
                <Text style={styles.item_terjual}>100 terjual</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.display_avatar}
              source={{uri: `https://i.pravatar.cc/80?img=18`}}
            />
            <View style={styles.display_item}>
              <Text style={styles.display_item_produk}>Nama Produk</Text>
              <View style={styles.display_item_detil}>
                <Text style={styles.item_harga}>Rp240.000</Text>
                <Text style={styles.item_terjual}>100 terjual</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity>
            <Image
              style={styles.display_avatar}
              source={{uri: `https://i.pravatar.cc/80?img=19`}}
            />
            <View style={styles.display_item}>
              <Text style={styles.display_item_produk}>Nama Produk</Text>
              <View style={styles.display_item_detil}>
                <Text style={styles.item_harga}>Rp240.000</Text>
                <Text style={styles.item_terjual}>100 terjual</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

export default ContentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 55,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  col: {
    flexDirection: 'column',
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'pink',
    padding: 20,
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fefeee',
    width: 500,
    height: 50,
    flex: 1,
  },
  item_heading: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  display_avatar: {
    width: 190,
    height: 190,
    borderRadius: 5,
  },
  display_item: {
    padding: 5,
  },
  display_item_produk: {
    fontSize: 16,
  },
  display_item_detil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  item_harga: {
    fontSize: 18,
    color: 'red',
  },
  item_terjual: {
    fontSize: 12,
    alignSelf: 'center',
  },
});
