/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
    let specialProblems = 0;
    let page = 1;
    
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= arr[i]; j++) {
            if (j === page) {
                specialProblems++;
            }
            if (j % k === 0 || j === arr[i]) {
                page++;
            }
        }
    }
    
    return specialProblems;
}