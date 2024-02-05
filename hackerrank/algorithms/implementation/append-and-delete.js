/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    let commonLength = 0;
    
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }
    
    let totalChanges = s.length + t.length - 2 * commonLength;
    if (k >= totalChanges && (k - totalChanges) % 2 === 0 || k >= s.length + t.length) {
        return 'Yes';
    } else {
        return 'No';
    }
}