// 1. Using a Set

function isUniqueCharsUsingSet(str) {
  const uniqueChars = new Set(str);
  // console.log("Set contents:", Array.from(uniqueChars)); // View the set
  // console.log("String size:", str.length);
  return uniqueChars.size === str.length;
}

// const string1 = "hello";
// const string2 = "helloworld";

// console.log(isUniqueCharsUsingSet(string1));
// console.log(isUniqueCharsUsingSet(string2));

// 2. Without Additional Data Structures

function isUniqueCharsWithoutSet(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
}

const string1 = "hello";
const string2 = "helloworld";

console.log(isUniqueCharsWithoutSet(string1));
console.log(isUniqueCharsWithoutSet(string2));

// 1. Using a Set:
// Time Complexity: O(n), where n is the length of the string. This is because:
//   Creating a set from the string takes O(n) time.
//   Comparing the set's size to the string's length takes O(1) time.
// Space Complexity: O(n), as a set is created to store unique characters.

// 2. Without Additional Data Structures:
// Time Complexity: O(n^2), due to the nested loops iterating over all pairs of characters.
// Space Complexity: O(1), as no additional data structures are used.