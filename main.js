
function knightMoves(start, end) {
    const queue = [start];
    const visited = new Set();
    const parent = new Map();
    parent.set(start.toString(), null); 

    while(queue.length > 0) {
        const currPos = queue.shift();
        
        if(currPos[0] === end[0] && currPos[1] === end[1]) {
            const path = reconstructPath(parent, start, end);
            printKnightMoves(path);
            return path;
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
    
    while(current !== start.toString()) {
        const previousPos = parent.get(current);
        path.unshift(previousPos);
        current = previousPos.toString();
    }
    
    return path;
}

function printKnightMoves(path) {
    if (!path) return "No path found";
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(pos => console.log(pos));
    return path;
}

// Test
knightMoves([0,0],[7,7]);