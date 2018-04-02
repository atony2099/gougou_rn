import 'whatwg-fetch'


function myInit(params){
return {
      method:'POST',
      body:JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  }
}

export function postWithParms(url,parms){
  console.log("currentURL",url);
  var result = fetch(url,myInit(parms)).then(res => res.json());;
  return result;
}
