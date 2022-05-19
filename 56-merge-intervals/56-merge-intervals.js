/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length == 1)  return intervals;
    intervals = intervals.sort(function(a, b){return a[0] - b[0];})
    for(var i = 1; i < intervals.length; i += 1){
        const currentInterval = intervals[i];
        const previousInterval = intervals[i - 1];
        if(currentInterval[0] <= previousInterval[1]){
            intervals[i] = [Math.min(currentInterval[0], previousInterval[0]), Math.max(currentInterval[1],                             previousInterval[1])];
            intervals.splice(i-1, 1);
            i -= 1;
        }
    }
    return intervals;
};