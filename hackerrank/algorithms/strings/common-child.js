/*
 * Complete the 'commonChild' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function commonChild(s1, s2) {
    const len = s1.length;
    const matrix = Array.from({ length: len + 1}, () => Array(len + 1).fill(0));
    
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }
    
    return matrix[len][len]
}