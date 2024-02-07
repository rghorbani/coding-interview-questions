/*
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

function stones(n, a, b) {
    let lastStones = new Set();
    
    for (let i = 0; i < n; i++) {
        // Calculate the value of the last stone for each possible combination
        lastStones.add(a * i + b * (n - i - 1));
    }
    
    // Convert the set to an array and sort it
    return Array.from(lastStones).sort((x, y) => x - y);
}