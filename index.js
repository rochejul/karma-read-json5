var readJSON = function (url) {
  url = readJSON.base + url;

  var xhr = new XMLHttpRequest();
  var json = null;

  xhr.open('GET', url, false);

  xhr.onload = function (e) {
    if (xhr.status === 200) {
      json = typeof JSON5 !== 'undefined' ? JSON5.parse(xhr.responseText) : JSON.parse(xhr.responseText);
    }

    else {
      console.error('readJSON', url, xhr.statusText);
    }
  };

  xhr.onerror = function (e) {
    console.error('readJSON', url, xhr.statusText);
  };

  xhr.send(null);
  return json;
};

readJSON.base = '/base/';

if (typeof exports !== 'undefined') {
  exports.readJSON = readJSON;
}
