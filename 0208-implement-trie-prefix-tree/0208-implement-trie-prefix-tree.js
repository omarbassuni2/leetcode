
var Trie = function() {
    this.map = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
/*
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]

a p p l e
*/
Trie.prototype.insert = function(word) {
    let node = this.map;
    for(let i = 0; i < word.length; i += 1) {
        if(!(word[i] in node)) {
            node[word[i]] = {};
        }
        node = node[word[i]];
    }
    node.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.map;
    for(let i = 0; i < word.length; i += 1) {
        if(!(word[i] in node)) {
            return false;
        }
        node = node[word[i]];
    }
    return !!node.endOfWord;    // converts undefined to false 
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.map;
    for(let i = 0; i < prefix.length; i += 1) {
        if(!(prefix[i] in node)) {
            return false;
        }
        node = node[prefix[i]];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */