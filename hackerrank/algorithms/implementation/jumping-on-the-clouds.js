/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    
    while (i < c.length - 1) {
        // Try to jump 2 steps if possible, otherwise jump 1 step
        if (i + 2 < c.length && c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }
        jumps++;
    }
    
    return jumps;
}