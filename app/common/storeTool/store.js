import {
  AsyncStorage
} from 'react-native'


export const USER_KEY = 'USER_KEY'
export const TOKEN_KEY = 'TOKEN_KEY'

export async function asyncGetKey(keys){
    let result   = await AsyncStorage.getItem(key);
    return result;
}

export async function asyncGetAllKeys (keys){
    let result   = await AsyncStorage.multiGet(keys);
    return result;
}

async function ayncMutSetItme(keyValuesArray:Array<Array<string>>){
  await AsyncStorage.set(keyValuesArray)

}


AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (err, stores) => {
    stores.map((result, i, store) => {
      // get at each store's key/value so you can work with it
      let key = store[i][0];
      let value = store[i][1];
    });
  });
});
