/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const hashMap = {};
    words = words.sort();
    words.forEach((word) => {
        if(hashMap[word])    hashMap[word] += 1;
        else    hashMap[word] = 1;
    });
    let output = Object.keys(hashMap).sort((a,b) => { return hashMap[b]-hashMap[a] });
    return output.slice(0, k);
};