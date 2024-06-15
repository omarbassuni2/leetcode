/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 [[1,0]] {0 :(1)}
 [[1,0],[0,1]] {0 :(1), 1: (0)}
 */
var canFinish = function(numCourses, prerequisites) {
    const cycle = new Set(), preMap = {};
    // Create adjacency list
    for(const [course, pre] of prerequisites) {
        if(course in preMap)    preMap[course].push(pre);
        else                    preMap[course] = [pre];
    }
    function dfs(crs) {
        if(cycle.has(crs))    return false; // Means two courses are co-dependant 
        if(!(crs in preMap))    return true;    // Means course has no prerequisite 
        // Adding to the visited set to detect cycles along the current path
        cycle.add(crs);
        for(const pre of preMap[crs]) {
            if(!(dfs(pre))) return false;
        }
         // removing from the visited set to consider new paths
        cycle.delete(crs);
        delete preMap[crs];     // To denote that this course has no cycles in its path and can be taught
        return true
    }
    // Iterating over courses that have prerequisites and running DFS on them
    for(const crs of Object.keys(preMap)) {
        if(!(dfs(crs)))     return false;
    }
    return true;
};