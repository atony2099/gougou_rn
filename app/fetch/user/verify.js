import { getWithParms} from '../get'
import {postWithParms} from '../post'
import {ApiManger,ApiType} from '../config'
function getVerifyCode(phoneNumber) {
    let manager  = new ApiManger()
    let path = manager.getPath(ApiType.USER,'code')
    const result = getWithParms(path ,{phoneNumber})
    return result;
}

function verify(phoneNumber, code){
  let manager = new ApiManger()
  let path = manager.getPath(ApiType.USER,'verify')
  return postWithParms(path,{phoneNumber:phoneNumber,verifyCode:code})
}


export {getVerifyCode,verify}
