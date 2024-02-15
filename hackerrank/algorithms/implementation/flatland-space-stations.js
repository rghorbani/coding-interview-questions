function flatlandSpaceStations(n, c) {
    // Sort the space stations' locations
    c.sort((a, b) => a - b);
    
    let maxDistance = Math.max(c[0], n - 1 - c[c.length - 1]);
    
    for (let i = 1; i < c.length; i++) {
        // Calculate the maximum distance between adjacent space stations
        const distance = Math.floor((c[i] - c[i - 1]) / 2);
        if (maxDistance < distance) {
            maxDistance = distance;
        }
    }
    
    return maxDistance;
}