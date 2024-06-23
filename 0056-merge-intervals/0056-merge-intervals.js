/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/*
intervals = [[1,4]]
intervals = [[1,3],[2,6],[8,10],[15,18]]
intervals = [[1,4],[4,5]]
intervals = [[0,0],[0,5]]

*/
var merge = function(intervals) {
    if(intervals.length === 1)  return intervals;
    intervals = intervals.sort((a,b) => a[0]-b[0]);
    for(let i = 1; i < intervals.length; i += 1) {
        const curr = intervals[i], prev = intervals[i - 1];
        if(curr[0] <= prev[1]) {
            intervals[i] = [Math.min(curr[0], prev[0]), Math.max(curr[1], prev[1])];
            intervals[i - 1] = undefined; 
        }
    }
    return intervals.filter((i) => i);
};