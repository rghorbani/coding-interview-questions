/*
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
    const word = 'hackerrank';
    let j = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === word[j]) {
            j++
        }
        if (j === word.length) {
            return 'YES';
        }
    }
    
    return 'NO';
}