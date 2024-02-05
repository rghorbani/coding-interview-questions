/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    let remaindersCount = new Array(k).fill(0);

    // Count the occurrences of each remainder
    s.forEach(num => {
        remaindersCount[num % k]++;
    });
    
    // Initialize result, include 0 remainder if present
    let count = Math.min(remaindersCount[0], 1);
    
    // Loop for half of the remainders (symmetric)
    for (let i = 1; i <= k / 2; i++) {
        if (i !== k - i) {
            // Max of the symmetric remainders
            count += Math.max(remaindersCount[i], remaindersCount[k - i]);
        } else {
            // Include only once if it's exactly half of k
            count += Math.min(remaindersCount[i], 1);
        }
    }
    
    return count;
}