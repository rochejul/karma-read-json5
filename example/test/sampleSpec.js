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
