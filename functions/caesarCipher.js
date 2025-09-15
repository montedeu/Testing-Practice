alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesarCipher(str, shift) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    
    shift = shift % 26;
    let result = '';

    for (let char of str) {
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();
        const index = alphabet.indexOf(lowerChar);

        if (index === -1) {
            result += char;
        } else {
            const newIndex = (index + shift + 26) % 26;
            const newChar = alphabet[newIndex];
            result += isUpperCase ? newChar.toUpperCase() : newChar;
        }
    }
    return result;
}

module.exports = caesarCipher;