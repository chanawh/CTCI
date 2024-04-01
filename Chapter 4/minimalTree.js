class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(arr) {
    if (!arr.length) {
        return null;
    }

    // Find the middle index
    const mid = Math.floor(arr.length / 2);

    // Create the root node with the middle element
    const root = new TreeNode(arr[mid]);

    // Recursively build the left and right subtrees
    root.left = sortedArrayToBST(arr.slice(0, mid));
    root.right = sortedArrayToBST(arr.slice(mid + 1));

    return root;
}

function printTree(root, level = 0, prefix = "Root: ") {
    if (!root) {
        return;
    }

    // Print the current node
    console.log(" ".repeat(level * 4) + prefix + root.value);

    // Recursively print left and right subtrees
    if (root.left || root.right) {
        printTree(root.left, level + 1, "L--- ");
        printTree(root.right, level + 1, "R--- ");
    }
}

// Example usage
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const bstRoot = sortedArrayToBST(sortedArr);
printTree(bstRoot);


// Time Complexity: The function is recursively called for every element in the array. 
// At each recursive call, the function slices the array into two halves. 
// The slicing operation takes O(n) time where n is the number of elements in the array. 
// Therefore, the overall time complexity is O(n log n).

// Space Complexity: The space complexity is O(n) because in the worst case (when the given array is sorted), 
// the function will end up with O(n) recursive calls (each call adds a new level to the recursion tree), 
// and hence O(n) space for the call stack.