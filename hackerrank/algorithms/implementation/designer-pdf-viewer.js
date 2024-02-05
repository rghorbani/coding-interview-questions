/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    let maxHeight = 0;

    for (let i = 0; i < word.length; i++) {
        const height = h[word.charCodeAt(i) - 97];
        maxHeight = Math.max(maxHeight, height);
    }
    
    return maxHeight * word.length;
}