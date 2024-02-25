/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

function absolutePermutation(n, k) {
    const result = new Array(n);
    const used = new Array(n + 1).fill(false);
    
    for (let i = 1; i <= n; i++) {
        // Two possible positions for each number i are i+k and i-k
        const pos1 = i + k;
        const pos2 = i - k;
        
        if (pos2 > 0 && !used[pos2]) {
            result[i - 1] = pos2;
            used[pos2] = true;
        } else if (pos1 <= n && !used[pos1]) {
            result[i - 1] = pos1;
            used[pos1] = true;
        } else {
            return [-1];
        }
    }
    
    // Check for any discrepancies
    for (let i = 0; i < n; i++) {
        if (Math.abs(result[i] - (i + 1)) !== k) {
            return [-1];
        }
    }
    
    return result;
}