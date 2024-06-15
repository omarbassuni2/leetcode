/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    if(numCourses === 1)    return [0];
    const output = [], cycle = new Set(), map = {};
    // Create an adjancey list
    for(let i = 0; i < numCourses; i += 1)  map[i]  = [];
    for(const [course, pre] of prerequisites)  map[course].push(pre);
    
    // Create a dfs 
    function dfs(course) {
        // Check if the current path has cycle
        if(cycle.has(course))   return false;       
        // Check if the course has no dependecy or check its dependencies and it can take them all
        if(!(course in map)) return true;           
        cycle.add(course);
        for(const pre of map[course]) {
            if(!dfs(pre))   return false;
        }
        cycle.delete(course);
        // Delete the course from map to mark it as can be taken with all its dependencies
        delete map[course];     
        // Put the courses in its right order
        output.push(course);       
        return true;
    }
    
    // Check 
    for(let i = 0; i < numCourses; i += 1) {
        if(!dfs(i))    return [];
    }
    return output;
};