/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function merge(left, right){
  let sortedArr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
          sortedArr.push(left[0]);
          left = left.slice(1);
        } else {
            sortedArr.push(right[0]);
            right = right.slice(1);
        }
    }
    return [...sortedArr, ...left, ...right]
};

function mergeSort(arr){
    const half = arr.length / 2;
    if(arr.length <= 1){
        return arr;
    }
    const left = mergeSort(arr.slice(0, half));
    arr = arr.slice(half);
    const right = mergeSort(arr);
    return merge(left, right);
}
var findTheDifference = function(s, t) {
    s = mergeSort(s);
    t = mergeSort(t);
    var randomLetter = t[t.length - 1];
    for(var i = 0; i < s.length; i += 1){
        if(s[i] != t[i])    return t[i];
    }
    return randomLetter;
};