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
    intervals = intervals.sort((a,b) => a[0]-b[0])
    const output = [];
    for(let i = 1; i < intervals.length; i += 1) {
        if(intervals[i][0] <= intervals[i - 1][1]) {
           intervals[i] = [Math.min(intervals[i - 1][0], intervals[i][0]), Math.max(intervals[i - 1][1], intervals[i][1])]
        } else {
            output.push(intervals[i - 1]);
        }
    }
    output.push(intervals[intervals.length - 1]);
    return output;
};