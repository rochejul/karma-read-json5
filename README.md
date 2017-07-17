# karma-read-json5

[![Build Status](https://travis-ci.org/rochejul/karma-read-json5.svg?branch=master)](https://travis-ci.org/rochejul/karma-read-json5)[![Dependency Status](https://david-dm.org/rochejul/karma-read-json5.svg)](https://david-dm.org/rochejul/karma-read-json5)
[![devDependency Status](https://david-dm.org/rochejul/karma-read-json5/dev-status.svg)](https://david-dm.org/rochejul/karma-read-json5#info=devDependencies)

[![Known Vulnerabilities](https://snyk.io/test/github/rochejul/karma-read-json5/badge.svg)](https://snyk.io/test/github/rochejul/karma-read-json5)

[![NPM](https://nodei.co/npm/karma-read-json5.png?downloads=true&downloadRank=true)](https://nodei.co/npm/karma-read-json5/)
[![NPM](https://nodei.co/npm-dl/karma-read-json5.png?&months=6&height=3)](https://nodei.co/npm/karma-read-json5/)


Karma plugin to load JSON (and use if possible JSON5)

## To install it

Simply do:

````
npm install --save-dev --save-exact karma-read-json5
````

## Karma.conf.js example

````javascript
// Karma configuration
// Generated on Sun Jul 16 2017 13:22:56 GMT+0200 (Paris, Madrid (heure d’été))

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'readJSON'],


        // list of files / patterns to load in the browser
        files: [
            { 'pattern': 'test/**/*.json', 'included': false, 'served': true, 'watched': false },
            'test/**/*Spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Which plugins to enable
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-read-json5'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};

````

## Test example

````javascript
'use strict';

describe('Sample - ', function () {
    it('simple', function () {
        expect(true).toBe(true);
    });

    it('with simple json', function () {
        expect(readJSON('test/mock/normal.json')).toEqual({
            "array": [
                1,
                2,
                3
            ],
            "boolean": true,
            "null": null,
            "number": 123,
            "object": {
                "a": "b",
                "c": "d",
                "e": "f"
            },
            "string": "Hello World"
        });
    });

    it('with extended json', function () {
        expect(readJSON('test/mock/extended.json')).toEqual({
                "array": [
                    1,
                    2,
                    3
                ],
                "boolean": true,
                "null": null,
                "Infinity": Infinity,
                "number": 123,
                "object": {
                    "a": "b",
                    "c": "d",
                    "e": "f"
                },
                "string": "Hello World"
            }
        );
    });
});
````
