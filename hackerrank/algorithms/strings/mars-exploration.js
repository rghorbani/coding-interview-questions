/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    let changes = 0;
    const sos = 'SOS';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== sos[i % 3]) {
            changes++
        }
    }
    
    return changes;
}