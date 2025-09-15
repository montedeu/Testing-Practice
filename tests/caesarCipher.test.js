const caesarCipher = require('../functions/caesarCipher.js');

test('shifts letters by the given number', () => {
    expect(caesarCipher('abc', 2)).toBe('cde');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!'); 
})

test('handles negative shifts', () => {
    expect(caesarCipher('cde', -2)).toBe('abc');
    expect(caesarCipher('abc', -3)).toBe('xyz');
})

test('returns an empty string when input is an empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
})

test('returns an empty string when input is not a string', () => {
    expect(caesarCipher(123, 5)).toBe('');
    expect(caesarCipher(null, 5)).toBe('');
    expect(caesarCipher(undefined, 5)).toBe('');
    expect(caesarCipher({}, 5)).toBe('');
    expect(caesarCipher([], 5)).toBe('');
})

test('handles large shift values', () => {
    expect(caesarCipher('abc', 29)).toBe('def'); // 29 % 26 = 3
    expect(caesarCipher('xyz', 52)).toBe('xyz'); // 52 % 26 = 0
})

test('handles capital letters correctly', () => {
    expect(caesarCipher('AbC', 3)).toBe('DeF');
    expect(caesarCipher('XyZ', 2)).toBe('ZaB');
})