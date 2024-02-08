/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(n, c, m) {
    let totalChocolates = Math.floor(n / c);
    let wrappers = totalChocolates;
    
    while (wrappers >= m) {
        let newChocolates = Math.floor(wrappers / m);
        totalChocolates += newChocolates;
        wrappers = wrappers % m + newChocolates;
    }
    
    return totalChocolates;
}