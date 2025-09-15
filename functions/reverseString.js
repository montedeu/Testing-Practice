function reverseString(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    return str.split('').reverse().join('');
}

module.exports = reverseString;