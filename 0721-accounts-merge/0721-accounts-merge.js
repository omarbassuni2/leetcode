/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let parent = new Array(accounts.length).fill(undefined).map((_, i) => i);
    const map = {};
    function find(x) {
        if(parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }
    function union(x, y) {
        const xParent = find(x), yParent = find(y);
        if(xParent !== yParent)  parent[yParent] = xParent;
    }
    for(let i = 0; i < accounts.length; i += 1) {
        for(let j = 1; j < accounts[i].length; j += 1) {
            if(!(accounts[i][j] in map))   map[accounts[i][j]] = i;
            else union(map[accounts[i][j]], i);
        }
    }
    parent = parent.map(find);
    for(let i = 0; i < parent.length;  i+= 1) {
        if(parent[i] === i) continue;
        accounts[parent[i]].push(...accounts[i]);
        accounts[i] = undefined;
    }
    return accounts.filter(a => a).map((subArr) => {
        const t = Array.from(new Set(subArr));
        return [t[0], ...t.slice(1).sort()]
    });
};