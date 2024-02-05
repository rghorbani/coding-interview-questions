/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    const result = [];
    
    while (arr.length) {
        result.push(arr.length);
        let min = Math.min(...arr);
        arr = arr.filter(length => length > min);
    }
    
    return result;
}