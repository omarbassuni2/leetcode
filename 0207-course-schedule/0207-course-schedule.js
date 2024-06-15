/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 [[1,0]] {0 :(1)}
 [[1,0],[0,1]] {0 :(1), 1: (0)}
 */
var canFinish = function(numCourses, prerequisites) {
    const visited = new Set(), preMap = {};
    for(const [course, pre] of prerequisites) {
        if(course in preMap)    preMap[course].push(pre);
        else                    preMap[course] = [pre];
    }
    function dfs(crs) {
        if(visited.has(crs))    return false;
        if(!(crs in preMap))    return true;
        visited.add(crs);
        for(const pre of preMap[crs]) {
            if(!(dfs(pre))) return false;
        }
        visited.delete(crs);
        delete preMap[crs];
        return true
    }
    for(const crs of Object.keys(preMap)) {
        if(!(dfs(crs)))     return false;
    }
    return true;
};