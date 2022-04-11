/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const lastWord = s.split(' ');
    if(lastWord[lastWord.length - 1].length != 0)    return lastWord[lastWord.length - 1].length;
    var index = lastWord.length - 2;
    while(lastWord[index].length == 0){
      index -= 1;   
    }
    return lastWord[index].length;
};