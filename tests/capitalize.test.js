const capitalize = require('../functions/capitalize.js');

test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('capitalizes a single character string', () => {
    expect(capitalize('a')).toBe('A');
})

test('capitalizes the first letter and leaves the rest unchanged', () => {
    expect(capitalize('hELLO wORLD')).toBe('HELLO wORLD');
})

test('returns an empty string when input is an empty string', () => {
    expect(capitalize('')).toBe('');
})

test('returns an empty string when input is not a string', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize({})).toBe('');
    expect(capitalize([])).toBe('');
})