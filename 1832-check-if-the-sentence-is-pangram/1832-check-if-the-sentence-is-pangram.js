/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    var allChars = [];
    for (var i=97; i<123; i++){
        allChars.push(String.fromCharCode(i));
    }
    const setOfAllChars = new Set(allChars);
    sentence.split('').forEach((char) => {
       if(setOfAllChars.has(char))     setOfAllChars.delete(char); 
    });
    return setOfAllChars.size > 0 ? false : true;
};