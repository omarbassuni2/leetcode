/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n == 1)  return 1;
    const trusted = new Map();
    const trustee = new Map();
    for(const [a, b] of trust){
        if(trusted.get(b))  trusted.set(b, [...trusted.get(b), a]);
        else    trusted.set(b, [a]);
        if(trustee.get(a))  trustee.set(a, [...trustee.get(a), b]);
        else    trustee.set(a, [b]);
    }
    for(const [key, value] of trusted){
        if(value.length == n - 1 && value.indexOf(key) == -1 && !trustee.get(key))  return key;
    }
    return -1;
};