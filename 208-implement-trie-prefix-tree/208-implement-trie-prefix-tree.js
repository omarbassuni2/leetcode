var Trie = function() {
    this.map = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const chars = word.split('');
    let node = this.map;
    
    while (chars.length) {
        const char = chars.shift();
        if (node.hasOwnProperty(char)) {
            node = node[char];
        } else {
            node[char] = {};
            node = node[char];
        }
    }
    
    node.end = word;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const chars = word.split('');
    let node = this.map;
    
    while (chars.length) {
        const char = chars.shift();
        if (node.hasOwnProperty(char)) {
            node = node[char];
        } else {
            return false;
        }
    }
    
    return (node.end === word);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const chars = prefix.split('');
    let node = this.map;
    
    while (chars.length) {
        const char = chars.shift();
        if (node.hasOwnProperty(char)) {
            node = node[char];
        } else {
            return false;
        }
    }
    
    return !!node;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */