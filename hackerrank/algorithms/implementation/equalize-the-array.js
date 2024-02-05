/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    const frequency = {};
    let maxFrequency = 0;
    
    // Count the frequency of each element
    arr.forEach(num => {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
        
        // Keep track of the maximum frequency
        maxFrequency = Math.max(maxFrequency, frequency[num]);
    });
    
    return arr.length - maxFrequency;
}