const reverseString = require('../functions/reverseString.js');

test('reverses a regular string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
})

test('returns an empty string when input is an empty string', () => {
    expect(reverseString('')).toBe('');
})

test('returns an empty string when input is not a string', () => {
    expect(reverseString(123)).toBe('');
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
    expect(reverseString({})).toBe('');
    expect(reverseString([])).toBe('');
})