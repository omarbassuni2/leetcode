/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count = new Array(26).fill(0);
    ransomNote.split("").forEach((char) => {
        count[char.charCodeAt(0) - "a".charCodeAt(0)] -= 1;
    });
    magazine.split("").forEach((char) => {
        count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    });
    return count.every((c) => c >= 0);
};