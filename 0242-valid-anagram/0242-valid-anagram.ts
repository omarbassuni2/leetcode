function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const sMap: { [x: string]: number } = {};
    s.split("").forEach((char) => {
        if(sMap[char]) sMap[char] +=1;
        else    sMap[char] = 1;
    });
    for(let i = 0; i < t.length; i += 1) {
        if(sMap[t[i]] && sMap[t[i]] > 0) sMap[t[i]] -= 1;
        else return false;
    }
    for(const key of Object.keys(sMap)) {
        if(sMap[key] !== 0) return false;
    }
    return true;
};