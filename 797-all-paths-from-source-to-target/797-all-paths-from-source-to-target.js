/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const output = [];
    const destination = graph.length - 1;
    function dfs(node, path){
        path.push(node);
        if(node == destination){
            output.push(path);
            return;
        }
        for(let iterNode of graph[node]){
            dfs(iterNode, [...path]);
        }
    }
    dfs(0, []);
    return output;
};