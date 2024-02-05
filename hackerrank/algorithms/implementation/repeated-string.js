/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    const countAInS = s.split('').filter(char => char === 'a').length;
    const fullRepeats = Math.floor(n / s.length);
    const remainder = n % s.length;
    
    let totalAs = fullRepeats * countAInS;
    totalAs += s.slice(0, remainder).split('').filter(char => char === 'a').length;
    
    return totalAs;
}