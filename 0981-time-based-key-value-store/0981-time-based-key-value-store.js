
var TimeMap = function() {
    this.map = {}; // key: [value, timestamp]
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!(key in this.map))   this.map[key] = [];
    this.map[key].push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!(key in this.map))  return "";
    // Implement binary search
   let output = "" 
    let left = 0, right = this.map[key].length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(this.map[key][mid][1] <= timestamp) {
            output = this.map[key][mid][0]
            left = mid + 1;
        } 
        else {
            right = mid - 1;
        }
    }
    return output;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */