/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    let count = 0;
    let num = n.toString();
    
    for (let i = 0; i < num.length; i++) {
        let digit = parseInt(num[i], 10);
        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    }
    
    return count;
}