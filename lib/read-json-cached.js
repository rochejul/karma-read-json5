'use strict';

var readJSON = function (url) {
    url = readJSON.base + url;

    if (readJSON.cache[url]) {
        return readJSON.cache[url]; // Use cache
    }

    var xhr = new XMLHttpRequest();
    var json = null;

    xhr.open('GET', url, false); // Synchronous call

    xhr.onload = function () {
        if (xhr.status === 200) {
            json = typeof JSON5 !== 'undefined' ? JSON5.parse(xhr.responseText) : JSON.parse(xhr.responseText);
        }

        else {
            console.error('readJSON', url, xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('readJSON', url, xhr.statusText);
    };

    xhr.send(null);
    return json;
};

readJSON.base = '/base/';
readJSON.cache = { };
