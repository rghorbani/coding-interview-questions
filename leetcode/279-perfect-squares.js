/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = Array(n + 1).fill(Infinity); // Fill the array with Infinity
    dp[0] = 0; // Base case

    // For each integer up to n
    for (let i = 1; i <= n; i++) {
        // For each perfect square less than or equal to i
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
};