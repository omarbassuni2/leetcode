/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const serial = [];
    var dfs = function(root){
        if(!root){
            serial.push("N");
            return;
        }
        serial.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return JSON.stringify(serial);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const serialArr = JSON.parse(data);
    let i = 0;
    var dfs = function(){
        if(serialArr[i] == 'N'){
            i += 1;
            return null;
        }
        const root = new TreeNode(parseInt(serialArr[i]));
        i += 1;
        root.left = dfs();
        root.right = dfs();
        return root;
    }
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */