/**
 * @param {number[][]} graph
 * @return {number[][]}
 
[[4,3,1],[3,2,4],[3],[4],[]]
 stack = [4, 3,]
temp = [0, 1, 2, 3, ]
output = [[0, 1, 4], [0, 1, 2, 3, 4]]
 */
var allPathsSourceTarget = function(graph) {
    // Its a directed graph, so we don't need to have visited
    const output = [];
    // Use dfs to get all combinations, stack implementation
    function dfs(i, tempOutput) {
        if(i === graph.length - 1) {
            output.push(tempOutput.slice());
            return;
        }
        for(let j = 0; j < graph[i].length; j += 1) {
            dfs(graph[i][j], [...tempOutput, graph[i][j]])
        }
    }
    dfs(0, [0]);
    return output;
};