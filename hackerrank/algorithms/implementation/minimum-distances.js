/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    let minDistance = Infinity;
    const valueToIndex = {};
    
    for (let i = 0; i < a.length; i++) {
        if (valueToIndex.hasOwnProperty(a[i])) {
            const distance = i - valueToIndex[a[i]];
            minDistance = Math.min(minDistance, distance);
        }
        valueToIndex[a[i]] = i;
    }
    
    if (minDistance === Infinity) {
        return -1;
    } else {
        return minDistance;
    }
}