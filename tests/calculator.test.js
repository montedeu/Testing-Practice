const calculator = require('../functions/calculator.js');

test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
})

test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
})

test('divides two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
})

test('returns null when dividing by zero', () => {
    expect(calculator.divide(6, 0)).toBeNull();
})