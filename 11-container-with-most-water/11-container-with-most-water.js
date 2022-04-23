/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    while(leftIndex < rightIndex){
        const smallestHeight = Math.min(height[leftIndex], height[rightIndex]);
        const area = smallestHeight * (rightIndex - leftIndex);
        if(area > maxArea)  maxArea = area;
        if(height[leftIndex] < height[rightIndex]) leftIndex += 1;
        else    rightIndex -= 1;
    }
    return maxArea;
};