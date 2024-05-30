/**
 * @param {number[][]} intervals
 * @return {number}
 */
/*
intervals = [[1,2]] => 0 

intervals = [[1,2],[2,3],[3,4],[1,3]]
sorted    = [[1,2],[1,3],[2,3],[3,4]]

intervals = [[1,2],[1,2],[1,2]]
intervals = [[1,2],[2,3]]

*/
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 1)  return 0;
    intervals = intervals.sort((a,b) => a[0]-b[0])
    let counter = 0, left = 0;
    for(let i = 1; i < intervals.length; i += 1) {
        if(intervals[i][0] >= intervals[left][1])   left = i;
        else {
            counter += 1;
            left = intervals[i][1] <= intervals[left][1] ? i : left;
        }
    }
    return counter;
};