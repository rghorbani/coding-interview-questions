/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Returned before due year
    if (y1 < y2) {
      return 0;
    }
    // Same year, returned before due month
    if (y1 === y2 && m1 < m2) {
      return 0;
    }
    // Same year, same month, returned on or before due day
    if (y1 === y2 && m1 === m2 && d1 <= d2) {
      return 0;
    }
    
    // Returned after due year
    if (y1 > y2) {
      return 10000;
    }
    // Same year, returned after due month
    if (m1 > m2) {
      return (m1 - m2) * 500;
    }
    // Same year, same month, returned after due day
    if (d1 > d2) {
      return (d1 - d2) * 15;
    }
}