/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // Compute minimum distance from top to the each point, then return the minimum distance from the bottom elements
    for (let index = 1; index < triangle.length; index++) {
        const elementsLength = triangle[index].length;
        for (let elementIndex = 0; elementIndex < elementsLength; elementIndex++) {
            const leftValue = triangle[index - 1][elementIndex - 1] ?? Infinity;
            const rightValue = triangle[index - 1][elementIndex] ?? Infinity;
            triangle[index][elementIndex] += leftValue < rightValue ? leftValue : rightValue;
        }
    }
    
    return triangle[triangle.length - 1].reduce((acc, pathSum) => acc < pathSum ? acc : pathSum);
};