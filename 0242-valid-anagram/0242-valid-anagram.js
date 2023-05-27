/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)  return false;
    const sMap = {}, tMap = {};
    s.split("").forEach((char) => { sMap[char] ? sMap[char] += 1 : sMap[char] = 1 });
    t.split("").forEach((char) => { tMap[char] ? tMap[char] += 1 : tMap[char] = 1 });
    for(const [key, value] of Object.entries(sMap)) {
        if (!tMap[key] || tMap[key] !== value) return false;
    }
    return true;
};