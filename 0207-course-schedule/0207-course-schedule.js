/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 [[1,0]] {0 :(1)}
 [[1,0],[0,1]] {0 :(1), 1: (0)}
 */
var canFinish = function(numCourses, prerequisites) {
    if(numCourses === 1)    return true;
    const cycle = new Set(), processed = new Set(), map = {};
    for(let i = 0; i < numCourses; i += 1)  map[i]  = [];
    for(const [course, pre] of prerequisites)  map[course].push(pre);
    
    function dfs(course) {
        if(cycle.has(course))   return false;       
        if(processed.has(course)) return true;           
        cycle.add(course);
        for(const pre of map[course]) {
            if(!dfs(pre))   return false;
        }
        cycle.delete(course);
        processed.add(course)     
        return true;
    }
    
    // Check 
    for(let i = 0; i < numCourses; i += 1) {
        if(!dfs(i))    return false;
    }
    return true;
};