/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 
 */

/*
intervals = [[1,3],[6,9]], newInterval = [2,5]
intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
            [[1,2] , , ,      ,[12,16]] [3, 10]
intervals = [[6,9]], newInterval = [2,5]
intervals = [[6,9]], newInterval = [0,0]
intervals = [[6,9]], newInterval = [6,9]
intervals = [], newInterval = [6,9]
*/
var insert = function(intervals, newInterval) {
    if(intervals.length === 0)  return [newInterval];
    const output = [];
    //using the fact its a sorted interval (think of it as Binary search)
    for(let i = 0; i < intervals.length; i += 1) {
        const curr = intervals[i];
        if(newInterval[1] < curr[0]) {
            return [...output, newInterval, ...intervals.slice(i)];
        } else if(newInterval[0] > curr[1]) {
            output.push(curr);
        } else {
            newInterval = [Math.min(newInterval[0], curr[0]), Math.max(newInterval[1], curr[1])];
        }
    }
    output.push(newInterval);
    return output;
};