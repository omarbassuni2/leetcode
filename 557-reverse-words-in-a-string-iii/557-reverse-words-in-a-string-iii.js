/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ");
    let output = [];
    s.forEach((element) => {
       let l = 0, r = element.length - 1;
        let word = element.split('');
        while(l <= r){
            const temp = word[l];
            word[l] = word[r];
            word[r] = temp;
            r -= 1;
            l += 1;
        }
        output.push(word.join(''));
    });
    output = output.join(" ");
    console.log(output);
    return output;
};