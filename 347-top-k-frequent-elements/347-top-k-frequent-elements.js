/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashTable = new Map();
    for(var i = 0; i < nums.length; i += 1){
        if(hashTable.get(nums[i])){
            let prev = hashTable.get(nums[i]);
            hashTable.set(nums[i], prev + 1);
        } else   hashTable.set(nums[i], 1);
    }
    const sortedMap = new Map([...hashTable.entries()].sort((a,b) => b[1] - a[1]));
    let arr = [...sortedMap.entries()];
    for(var i = 0; i < k; i += 1){
        arr[i] = arr[i][0];
    }
    return arr.splice(0, k);
};