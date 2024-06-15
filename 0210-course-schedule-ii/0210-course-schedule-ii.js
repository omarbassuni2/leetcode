/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    if(numCourses === 1)    return [0];
    const output = [], cycle = new Set(), visited = new Set(), map = {};
    for(let i = 0; i < numCourses; i += 1)  map[i]  = [];
    for(const [course, pre] of prerequisites)  map[course].push(pre);
    function dfs(course) {
        if(cycle.has(course))   return false;
        if(visited.has(course)) return true;
        cycle.add(course);
        for(const pre of map[course]) {
            if(!dfs(pre))   return false;
        }
        cycle.delete(course);
        visited.add(course);
        output.push(course);
        return true;
    }
    for(let i = 0; i < numCourses; i += 1) {
        if(!dfs(i))    return [];
    }
    return output;
};