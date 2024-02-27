/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

function bomberMan(n, grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Function to detonate bombs and update the grid
    function detonateBombs(grid) {
        let result = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 'O'));
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0], [0, 0]];
        
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 'O') {
                    directions.forEach(([dx, dy]) => {
                        const x = i + dx, y = j + dy;
                        if (x >= 0 && x < rows && y >= 0 && y < cols) {
                            result[x][y] = '.';
                        }
                    });
                }
            }
        }
        
        return result;
    }
    
    // Convert grid to 2D array for easier manipulation
    let currentGrid = grid.map(row => row.split(''));
    
    if (n === 1) {
        // After 1 second, the initial state remains the same
        return grid;
    } else if (n % 2 === 0) {
        return new Array(rows).fill('O'.repeat(cols));
    } else {
        // For 3rd second and every odd second after that, alternate between two detonation states
        let stateAfterFirstDetonation = detonateBombs(currentGrid);
        let stateAfterSecondDetonation = detonateBombs(stateAfterFirstDetonation);
        
        // If n % 4 === 3, return the state after the first detonation; otherwise, return the state after the second detonation
        return (n % 4 === 3 ? stateAfterFirstDetonation : stateAfterSecondDetonation).map(row => row.join(''));
    }
}