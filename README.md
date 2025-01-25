# Knight Moves Pathfinder

A JavaScript implementation of an algorithm to find the shortest possible path for a knight to move between any two squares on a chessboard.

## Problem Description
Given a standard 8x8 chessboard and two positions (start and end), find the shortest sequence of moves a knight can make to reach the end position from the start position.

## Features
- Finds the shortest path using Breadth-First Search (BFS)
- Validates moves to ensure they stay within the chessboard
- Returns the complete path from start to end position
- Handles multiple possible shortest paths

## Function Signature
```javascript
knightMoves([startX, startY], [endX, endY])
```

## Example Output
```javascript
knightMoves([0,0],[3,3])
// Output: [[0,0],[1,2],[3,3]]
```

## Implementation Details
- Used BFS for finding the shortest path
- Validate moves to stay within 8x8 board
- Track and return the complete BFS traversal path
