/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    let factorial = BigInt(1);
    
    for (let i = BigInt(2); i <= BigInt(n); i++) {
        factorial *= i;
    }
    
    console.log(factorial.toString());
}