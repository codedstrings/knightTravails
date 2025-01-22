
function knightMoves(start, end) {
    const queue = [start];
    const visited = new Set();
    const parent = new Map();
    
    while(queue.length > 0) {
        const currPos = queue.shift();
        const currPosStr = currPos.toString(); // Convert to string for Map/Set keys
        
        if(currPos[0] === end[0] && currPos[1] === end[1]) {
            return reconstructPath(parent, start, end);
        }
        
        for(const nextPos of getValidMoves(currPos)) {
            const nextPosStr = nextPos.toString();
            if(!visited.has(nextPosStr)) {
                visited.add(nextPosStr);
                queue.push(nextPos);
                parent.set(nextPosStr, currPos); // Store how we reached nextPos
            }
        }
    }
    return null; //in case no path found. 
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

function reconstructPath(parent, start, end) {
    const path = [end];
    let current = end.toString();
    
    while(parent.has(current)) {
        const previousPos = parent.get(current);
        path.unshift(previousPos);
        current = previousPos.toString();
    }
    
    return path;
}

console.log(getValidMoves([0, 0])); 
console.log(getValidMoves([7, 7])); 
console.log(getValidMoves([3, 3])); // 8 moves