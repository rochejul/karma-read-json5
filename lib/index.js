const path = require('path');

function createPattern(pattern) {
    return {'pattern': pattern, 'included': true, 'served': true, 'watched': false}
}

function initReadJson(files) {
    files.unshift(createPattern(path.resolve(path.join(require.resolve('json5'), '/lib/json5.js'))));
    files.unshift(createPattern(path.resolve(path.join(__dirname, '/read-json.js'))));
}

initReadJson.$inject = ['config.files'];

module.exports = {
    'framework:readJson': ['factory', initReadJson]
};
