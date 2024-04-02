class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

function isBST(root, min, max) {
  // Base case: if the root is null, it's a valid BST
  if (root === null) {
      return true;
  }

  // Check if the current node's value is within the valid range
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false;
  }

  // Recursively check the left and right subtrees
  // For the left subtree, the max value becomes the current node's value
  // For the right subtree, the min value becomes the current node's value
  return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}

// Constructing the given tree
let root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.right.right = new TreeNode(14);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(13);

// Calling the isBST function with the root node and initial min/max values
let result = isBST(root, null, null);
console.log(result);  // Output: true
