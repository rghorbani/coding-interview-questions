/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encrypted = '';
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const isUpperCase = char === char.toUpperCase();
        const index = alphabet.indexOf(char.toLowerCase());
        
        if (index === -1) {
            encrypted += char;
        } else {
            const newIndex = (index + k) % 26;
            const newChar = alphabet[newIndex];
            
            encrypted += isUpperCase ? newChar.toUpperCase() : newChar;
        }
    }
    
    return encrypted;
}