/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    const start = Math.ceil(Math.sqrt(a));
    const end = Math.floor(Math.sqrt(b));
    
    return end - start + 1;
}