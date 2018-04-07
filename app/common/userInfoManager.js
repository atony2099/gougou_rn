

import {asyncGetAllKeys,ayncMutSetItme,asyncGetKey} from './storeTool/store'
import * as userKey from './storeTool/storeKey'



export default class UserInfoManager{

  static saveUserInfo(user:Object,token:String){
    let userString = JSON.stringify(user);
    ayncMutSetItme([[userKey.USER_KEY,userString], [userKey.TOKEN_KEY, token]]);
  }

   static  async loadUserInfo(){
     let stores = await asyncGetAllKeys([userKey.USER_KEY,userKey.TOKEN_KEY]);
     let array =  await stores.map((rsult,i,store)=>{
         let value = store[i][1];
         return value;
      })
     return  array
  }



  static async isUserHasLogin(){
      let key =  asyncGetKey([userKey.TOKEN_KEY]);



      // let promise = new  Promise((resolve,reject)=>{
      //   tokenPromise.then( string=>{
      //     resolve(string)
      //   }).catch((error)=>{
      //     reject(error)
      //   })
      //
      // })


      // return promise;
  }







}
