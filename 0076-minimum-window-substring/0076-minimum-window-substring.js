/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    /*
    ADOBECODEBANC
    ADOBEC
    BECODEBA
    CODEBA
    BANC 
    */
    if(s.length < t.length)     return "";
    const hashMapT = {}, hashMapS = {};
    let sizeT = 0, sizeS = 0;
    for(var i = 0; i < t.length; i += 1){
        if(t[i] in hashMapT)    hashMapT[t[i]] += 1;
        else{
            hashMapT[t[i]] = 1;
            sizeT += 1;
        }
    }
    let window = '', minWindow = s + t;
    for(var i = 0; i < s.length; i += 1){
        if(s[i] in hashMapT)
        {
            if(s[i] in hashMapS)    hashMapS[s[i]] += 1;
            else{
                hashMapS[s[i]] = 1;
            }
            if(hashMapS[s[i]] == hashMapT[s[i]])    sizeS += 1;
            window += s[i];
        }
        else if(window.length > 0)  window += s[i];
        if(sizeT == sizeS){
            minWindow = window.length < minWindow.length ? window : minWindow;
            hashMapS[window[0]] -= 1;
            if(hashMapS[window[0]] < hashMapT[window[0]])   sizeS -= 1;
            window = window.slice(1);
            const tempStr = window;
            for(var j = 0; j < tempStr.length && (sizeS == sizeT || !(window[0] in hashMapS)); j += 1){
                if(tempStr[j] in hashMapS)
                {
                    window = tempStr.slice(j);
                    if(sizeS == sizeT){
                        hashMapS[tempStr[j]] -= 1;
                        if(hashMapS[tempStr[j]] < hashMapT[tempStr[j]])     sizeS -= 1;
                        minWindow = window.length < minWindow.length ? tempStr.slice(j) : minWindow;
                        window = window.slice(1);
                    }
                }
            }
        }
    }
    return minWindow == s + t ? "" : minWindow;
};