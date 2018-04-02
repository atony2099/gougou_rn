
// var  baseApi = 'http://rap.taobao.org/mockjsdata/30345/'

var hostPath = 'http://localhost:8080'

const ApiType = {
  USER:'user'
}
Object.freeze(ApiType)

class ApiManger {
  constructor(){
    this.host = hostPath
  }
  getPath(type, name){
    let verifyApi = [this.host,type,name]
    return  verifyApi.join('/')
  }
}

export {ApiManger,ApiType}
