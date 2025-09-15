const analyzeArray = require('../functions/analyzeArray.js');

test('analyzes an array of numbers', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
    expect(analyzeArray([-10, 0, 10, 20])).toEqual({
        average: 5,
        min: -10,
        max: 20,
        length: 4
    });
});

test('returns null for an empty array', () => {
    expect(analyzeArray([])).toBeNull();
});

test('returns null for non-array inputs', () => {
    expect(analyzeArray(null)).toBeNull();
    expect(analyzeArray(undefined)).toBeNull();
    expect(analyzeArray(123)).toBeNull();
    expect(analyzeArray('string')).toBeNull();
    expect(analyzeArray({})).toBeNull();
});

test('returns null if array contains non-number elements', () => {
    expect(analyzeArray([1, 2, '3', 4])).toBeNull();
    expect(analyzeArray([1, 2, null, 4])).toBeNull();
    expect(analyzeArray([1, 2, undefined, 4])).toBeNull();
    expect(analyzeArray([1, 2, {}, 4])).toBeNull();
    expect(analyzeArray([1, 2, [], 4])).toBeNull();
});