import AsyncStorage from '@react-native-async-storage/async-storage';

const locStorage = {
  // Simpan
  async saveItem(key, value) {
    const id = [key, value];
    const firstname = [key, value];
    const lastname = [key, value];
    const token = [key, value];
    try {
      //   const jsonValue = JSON.stringify(value);
      await AsyncStorage.multiSet([id, firstname, lastname, token]);
      //   alert('Data saved!');
    } catch (error) {
      alert('AsyncStorage Error : ', error.message);
    }
  },
  // Ambil
  async getItem(key) {
    let values;
    try {
      values = await AsyncStorage.multiGet([key]);
      //   console.log(pecah);
      // const value = JSON.stringify(jsonValue);
      //   if (res !== null) {
      //     // value previously stored
      //     console.log(res);
      //     // alert('dapett token');
      //   }
    } catch (e) {
      alert('kosong');
    }
    // console.log('valueee', values[0][1]);
    return values[0][1];
  },
  async getAllItem() {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      alert('getall kosong');
    }
    console.log(keys);
  },
  async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  },
};

export default locStorage;
