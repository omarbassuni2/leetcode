/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 
 */

/*
intervals = [[1,3],[6,9]], newInterval = [2,5]

*/
var insert = function(intervals, newInterval) {
    if(intervals.length === 0)  return [newInterval];
    const output = [];
    for(let i = 0; i < intervals.length; i += 1) {
        const curr = intervals[i];
        if(newInterval[0] > curr[1])    output.push(curr);
        else if (newInterval[1] < curr[0]) {
            return [...output, newInterval, ...intervals.slice(i)];
        }  else {
            newInterval = [Math.min(newInterval[0], curr[0]), Math.max(newInterval[1], curr[1])];
        }
    }
    output.push(newInterval);
    return output;
};