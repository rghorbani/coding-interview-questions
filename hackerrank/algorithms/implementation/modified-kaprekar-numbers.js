/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    let found = false;
    const result = [];
    
    for (let i = p; i <= q; i++) {
        const square = BigInt(i) * BigInt(i);
        const squareStr = square.toString();
        const d = i.toString().length;
        
        const right = squareStr.substring(squareStr.length - d);
        const left = squareStr.substring(0, squareStr.length - d) || '0';
        if (parseInt(left) + parseInt(right) === i) {
            found = true;
            result.push(i);
        }
    }
    
    if (found) {
        console.log(result.join(' '));
    } else {
        console.log('INVALID RANGE');
    }
}