import 'whatwg-fetch'


function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
        console.log("currentParms:",result);
    }
    return result;
}

var myInit = {
  method:'GET',
  headers: {
      'Accept': 'application/json, text/plain, */*'
  }
}
export function get(url) {
  console.log("currentURLIS", url);
  console.log("currentURLIS", url);
  var result = fetch(url, myInit);
  return result.then(res => res.json());;
}

export function getWithParms(url,parms){
  var lastUrl = url + '?' + obj2params(parms);
  console.log("currentURL",lastUrl);
  var result = fetch(lastUrl,myInit).then(res => res.json());;
  return result;
}
