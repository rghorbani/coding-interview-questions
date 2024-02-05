/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let valleys = 0;
    let level = 0; // Sea level
    
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            level++;
            if (level === 0) {
                valleys++;
            }
        } else {
            level--;
        }
    }
    
    return valleys;
}