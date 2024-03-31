// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1, str2) {
    // Step 1: Check lengths
    if (str1.length !== str2.length) {
        return false; // Return false if lengths are different
    }

    // Step 2: Sort both strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Step 3: Compare sorted strings
    for (let i = 0; i < sortedStr1.length; i++) {
        if (sortedStr1[i] !== sortedStr2[i]) {
            return false; // Return false if characters at corresponding positions are different
        }
    }

    return true; // Return true if all characters match
}

// Example usage
const str1 = "abc";
const str2 = "bca";


console.log(checkPermutation(str1, str2)); // Output: true

// Time Complexity:
// Dominant Step: Sorting (O(n log n)) using a typical sorting algorithm like merge sort or quick sort.
//   Other Steps: Length comparison (O(1)), string splitting/joining (O(n)), and character comparison (O(n)).
//   Overall Time Complexity: O(n log n) due to sorting, as other steps have lower or equal time complexity.

// Space Complexity:
// Main Space Usage: Temporary sortedStr1 and sortedStr2 arrays (O(n)) for holding sorted characters.
//   Other Space Usage: Variables for lengths and iteration (O(1)).
// Overall Space Complexity: O(n), dominated by the temporary arrays.