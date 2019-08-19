/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var minLeaf = '';

/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    dfs(root, '');
    return minLeaf;
};

function dfs(node, str) {
    if (!node) {
        var tmpS = str.split('').reverse().join('');
    
        if (!minLeaf) {
            minLeaf = tmpS;
        }
        if (tmpS < data) {
            minLeaf = tmpS;
        }
        return;
    }
    var s = '';
    if (node.val != null) {
        s = String.fromCharCode(node.val + 97);    
    }
    dfs(node.left, str + s);
    dfs(node.right, str + s);
}