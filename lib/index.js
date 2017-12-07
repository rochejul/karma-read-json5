const path = require('path');

function createPattern(pattern) {
    return { 'pattern': pattern, 'included': true, 'served': true, 'watched': false };
}

function initReadJson(files, config) {
    files.unshift(createPattern(require.resolve('json5')));

    if (config && config.cached) {
        files.unshift(createPattern(path.resolve(path.join(__dirname, '/read-json-cached.js'))));

    } else {
        files.unshift(createPattern(path.resolve(path.join(__dirname, '/read-json.js'))));
    }
}

initReadJson.$inject = ['config.files', 'config.client.readJSON'];

module.exports = {
    'framework:readJSON': ['factory', initReadJson]
};
