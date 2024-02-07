/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseStr = s.toLowerCase();
    
    for (let char of alphabet) {
        if (!lowerCaseStr.includes(char)) {
            return 'not pangram';
        }
    }
    
    return 'pangram';
}