/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var flatten = function(root) {
    flattenTree(root);
    function flattenTree(node) {
  
      if (!node) return node;
      var leftTail = flattenTree(node.left);
      var rightTail = flattenTree(node.right);
  
      if (!leftTail) return rightTail ? rightTail : node;
      leftTail.right = node.right;
      node.right = node.left;
      node.left = null;
      return rightTail ? rightTail : leftTail;
    }
};

