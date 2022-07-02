/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts = horizontalCuts.sort(function(a,b){ return a-b; });
    horizontalCuts.push(h);
    verticalCuts = verticalCuts.sort(function(a,b){ return a-b; });
    verticalCuts.push(w);
    let maxHeight = 0;
    let maxWeight = 0;
    maxHeight = Math.max(maxHeight, verticalCuts[0] - 0);
    maxWeight = Math.max(maxWeight, horizontalCuts[0] - 0);
    for(var i = 1; i < verticalCuts.length; i += 1){
        maxHeight = Math.max(maxHeight, verticalCuts[i] - verticalCuts[i-1]);
    }
    for(var i = 1; i < horizontalCuts.length; i += 1){
        maxWeight = Math.max(maxWeight, horizontalCuts[i] - horizontalCuts[i-1]);
    }
    return BigInt(maxHeight) * BigInt(maxWeight) % BigInt(Math.pow(10, 9) + 7);
};