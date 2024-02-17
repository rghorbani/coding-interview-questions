/*
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING b as parameter.
 */

function happyLadybugs(b) {
    const frequency = {};
    for (let i = 0; i < b.length; i++) {
        if (frequency[b[i]]) {
            frequency[b[i]]++;
        } else {
            frequency[b[i]] = 1;
        }
    }
    
    // Check for unhappy ladybug (ladybug with only one of its kind and not an underscore)
    for (let key in frequency) {
        if (key !== '_' && frequency[key] === 1) {
            return 'NO';
        }
    }
    
    // If there's at least one empty cell, it's always possible to rearrange
    if (frequency['_'] > 0) {
        return 'YES';
    }
    
    // Check if all ladybugs are already happy
    for (let i = 1; i < b.length - 1; i++) {
        if (b[i] !== b[i - 1] && b[i] !== b[i + 1]) {
            return 'NO';
        }
    }
    
    // Edge cases for first and last being unhappy
    if (b[0] !== b[1] || b[b.length - 1] !== b[b.length - 2]) {
        return 'NO';
    }
    
    return 'YES';
}