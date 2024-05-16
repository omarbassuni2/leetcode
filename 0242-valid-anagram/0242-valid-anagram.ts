function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const sMap: { [x: string]: number } = {};
    const tMap: { [x: string]: number } = {};
    s.split("").forEach((char) => {
        if(sMap[char]) sMap[char] +=1;
        else    sMap[char] = 1;
    });
    t.split("").forEach((char) => {
        if(tMap[char]) tMap[char] +=1;
        else    tMap[char] = 1;
    });
    if(Object.keys(sMap).length !== Object.keys(tMap).length)    return false;
    for(const key of Object.keys(sMap)) {
        if(!tMap[key] || tMap[key] !== sMap[key])   return false;
    }
    return true;
};