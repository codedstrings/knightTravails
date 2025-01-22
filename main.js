
function knightMoves(start, end) {
    const queue = [start];
    const visited = new Set();
    const parent = new Map();
    
    // BFS will go here

    //return the shortest path.
}

function getValidMoves([x, y]) {
    // Function to generate valid knight moves from position [x, y]
    const moves = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y + 2],
        [x - 1, y - 2]
    ];
    return moves.filter(isValidPosition);
}

function isValidPosition([x, y]) {
    // Check if position is within board
    if (x < 0 || x > 7 || y < 0 || y > 7) {
        return false;
    }
    return true;
}
console.log(getValidMoves([0, 0])); 
console.log(getValidMoves([7, 7])); 
console.log(getValidMoves([3, 3])); // 8 moves