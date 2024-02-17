/*
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B) {
    let loaves = 0;
    
    for (let i = 0; i < B.length; i++) {
        if (B[i] % 2 !== 0) {
            // If current person has odd loaves, give one to this person and one to the next
            if (i + 1 < B.length) {
                B[i]++;
                B[i + 1]++;
                loaves += 2;
            } else {
                // If it's the last person and they have odd loaves, it's impossible to satisfy the condition
                return 'NO';
            }
        }
    }
    
    return loaves.toString();
}