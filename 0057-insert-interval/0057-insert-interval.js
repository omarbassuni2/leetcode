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
function inbound(interval, newInterval) {
    return (interval[0] <= newInterval[0] && newInterval[0] <= interval[1] || interval[0] <= newInterval[1] && newInterval[1] <= interval[1])
}
var insert = function(intervals, newInterval) {
    if(intervals.length === 0)  return [newInterval];
    const output = [];
    for(const interval of intervals) {
        if(inbound(interval, newInterval) || inbound(newInterval, interval)) {
            const minBound = Math.min(interval[0], newInterval[0]), maxBound =   Math.max(interval[1], newInterval[1]);
            newInterval = [minBound, maxBound];
         } else {
             output.push(interval);
         }
    }
    let left = 0;
    while(left < intervals.length && intervals[left][0] < newInterval[0]) left += 1;
    return [...output.slice(0, left), newInterval, ...output.slice(left)];
};