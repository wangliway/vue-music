import rawJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  return new Promise((resolve, reject) => {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    rawJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = '';
  for (var k in data) {
    let val = data[k] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(val)}`
  }
  return url ? url.substring(1) : '';
}
