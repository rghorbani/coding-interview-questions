/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    let pairs = 0;
    const colors = {};
    
    for (let i = 0; i < n; i++) {
        const color = ar[i];
        if (colors[color]) {
            pairs++
            delete colors[color];
        } else {
            colors[color] = true;
        }
    }
    
    return pairs;
}