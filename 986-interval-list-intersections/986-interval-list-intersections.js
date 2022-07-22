/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const output = [];
    let pos1 = 0, pos2 = 0;
    if(firstList.length == 0 || secondList.length == 0)     return [];
    while(pos1 < firstList.length && pos2 < secondList.length){
        let start = Math.max(firstList[pos1][0], secondList[pos2][0]);
        let end = Math.min(firstList[pos1][1], secondList[pos2][1]);
        if(start <= end)    output.push([start, end]);
        if(firstList[pos1][1] < secondList[pos2][1])    pos1 += 1;  //if the end1 < end2 remove increase the pointer
        else    pos2 += 1;
    }
    return output;
};