/**
 * @param {number[][]} grid
 * @return {number}
 
 [[2,1,1],[1,1,0],[0,1,1]]
 */
var orangesRotting = function(grid) {
    let time = 0, fresh = 0;
    const queue = [];
    for(let i = 0; i < grid.length; i += 1) {
        for(let j = 0; j < grid[0].length; j += 1) {
            if(grid[i][j] === 1)   fresh += 1;
            if(grid[i][j] === 2)   queue.push([i, j]);
        }
    }
    while(queue.length && fresh > 0) {
        // When i used queue.length in the loop directly it changed the loop behavior, so we need to have a static length before the acutal loop
        const size = queue.length; 
        for(let k = 0; k < size; k += 1) {
           const [i, j] = queue.shift();
            for(const [r, c] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
                if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] !== 1)   continue;
                grid[r][c] = 2;
                queue.push([r, c]);
                fresh -= 1;
            }
        }
        time += 1;
    }
    return fresh === 0 ? time : -1;
}


