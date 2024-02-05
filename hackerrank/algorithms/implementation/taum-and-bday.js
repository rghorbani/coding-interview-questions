/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
    const minBlackCost = Math.min(bc, wc + z);
    const minWhiteCost = Math.min(wc, bc + z);
    
    return (BigInt(b) * BigInt(minBlackCost)) + (BigInt(w) * BigInt(minWhiteCost));
}