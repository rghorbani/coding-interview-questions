/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
    let arr = w.split('');
    let i = w.length - 2
    
    // Find the first character that is less than the character immediately after it
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    
    // If no such character exists, no answer is possible
    if (i < 0) {
        return 'no answer';
    }
    
    let j = arr.length - 1;
    // Find the smallest character on the right side of i that is greater than arr[i]
    while (arr[j] <= arr[i]) {
        j--;
    }
    
    // Swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
    
    // Reverse the suffix starting from i + 1
    let right = arr.splice(i + 1).reverse();
    let result = arr.concat(right).join('');
    
    return result;
}