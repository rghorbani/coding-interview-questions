/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    s = s.replace(/\s/g, ''); // Remove spaces
    let L = s.length;
    let rows = Math.floor(Math.sqrt(L));
    const cols = Math.ceil(Math.sqrt(L));
    
    if (rows * cols < L) {
        rows++;
    }
    
    let result = [];
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const index = j * cols + i;
            if (index < L) {
                result.push(s[index]);
            }
        }
        result.push(' ');
    }
    
    return result.join('');
}