/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
if (grid[0][0] == 1) return -1
  let list = [[[0,0],1]];
  let row = grid.length;
  let column = grid[0].length;
  let directions = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1]];
  let visited = new Set;

  while (list.length){

    let [[a,b],count] = list.shift();

    if (a == row-1 && b==column-1) return count;
    if (visited.has(`${a}-${b}`)) continue;

    visited.add(`${a}-${b}`);
    for(let [x,y] of directions){
      let [x1,y1] = [x + a, y + b];
      if (x1 >= row ||  y1 >= column || x1 < 0 || y1 < 0 || grid[x1][y1] != 0)continue;
      list.push([[x1,y1],count+1]);
    }
  }
  return -1;

};