/**
 * @param {number[][]} intervals
 * @return {number}
 */
/*

intervals = [[1,2],[2,3],[3,4],[1,3]]
sorted    = [[1,2],[1,3],[2,3],[3,4]]

[[1,2],[1,2],[1,2]]

[[1,2],[2,3]]

    The idea is to sort numbers and check if curr has a lower bound lower than previous upper bound, if so we should remove curr
    or just increase the count and not updating prev. else we update prev = intervals[i]
    If prev[0]
*/
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 1)  return 0;
    intervals = intervals.sort((a,b) => a[0]-b[0])
    let counter = 0, prev = intervals[0];
    for(let i = 1; i < intervals.length; i += 1) {
        if(intervals[i][0] < prev[1]) {
            counter += 1;
            prev = intervals[i][1] <= prev[1] ? intervals[i] : prev;
        } else {
            prev = intervals[i];
        }
    }
    return counter;
};