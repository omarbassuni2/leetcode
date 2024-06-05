/**
 * @param {string[]} words
 * @return {string[]}
 */
function getMap(word) {
    const map = {};
    word.split("").forEach((w) => {
        if(w in map)    map[w] += 1;
        else            map[w] = 1;
    });
    return map;
}
var commonChars = function(words) {
    let map = getMap(words[0]), output;
    for(const word of words) {
        const temp = getMap(word);
        output = Object.keys(map).map((key) => {
            if(key in temp) {
                map[key] = Math.min(map[key], temp[key]);
                return key.repeat(map[key]);
            }
            else    delete map[key];
        }).filter(v => v).join("");
    };
    return output.split("")
};