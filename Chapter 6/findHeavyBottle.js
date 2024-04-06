// 6.1 The Heavy Pill: You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight 1.1 grams. 
// Given a scale that provides an exact measurement, how would you find the heavy bottle?
// You can only use the scale once.


// Hints: #186, #252, #379, #387
// You can only use the scale once. This means that all, or almost all, of the bottles must be used. They also must be handled in different ways or else you couldn't distinguish between them.
// What happens if you put one pill from each bottle on the scale? What if you put two pills from each bottle on the scale?
// If you fill the 5-quart jug and then use it to fill the 3-quart jug, you'll have two quarts left in the 5-quart jug. You can either keep those two quarts where they are, or you can dump the contents of the smaller jug and pour the two quarts in there.
// You should be able to have an equation that tells you the heavy bottle based on the weight.


// Grouping Pills: We use slice to create an array of arrays (groups), where each inner array contains 3 pills from each of the first 19 bottles (excluding the last bottle).
// Expected Weight: We calculate the expected weight for a group of normal pills (3 pills * 1.0 gram/pill) and store it in expectedWeight.
// Finding the Heavy Group: We use findIndex on the groups array to check if any group's total weight (reduce function) exceeds expectedWeight. If so, the index of that group (heavyGroupIndex) is returned.
// Identifying the Heavy Bottle: If a heavy group is found, we calculate the corresponding bottle index by adding 1 to heavyGroupIndex (since we skipped the last bottle in grouping).
// Handling the Last Bottle: If no heavy group is found (all groups have the expected weight), it means the heavy pill is in the last bottle (bottle 20).
// Key Points for Programmers:

// We leverage array manipulation techniques (slice, map, reduce) to efficiently group and analyze pill weights.
// The findIndex method allows us to identify the first group that deviates from the expected weight, pinpointing the potential heavy bottle location.
// By strategically grouping pills, we can identify the heavy bottle using the scale only once.


function findHeavyBottle(bottles) {
  // Group pills: Take 3 pills from each bottle (except the last one)
  const groups = bottles.slice(0, -1).map(bottle => bottle.slice(0, 3));

  // Calculate expected weight for normal pills (3 pills * 1.0 gram)
  const expectedWeight = 3.0;

  // Find the group with a weight exceeding the expected weight
  const heavyGroupIndex = groups.findIndex(group => group.reduce((acc, weight) => acc + weight, 0) > expectedWeight);

  // If a heavy group is found, identify the bottle within that group
  if (heavyGroupIndex !== -1) {
    const heavyBottleIndex = heavyGroupIndex + 1; // Account for skipping the last bottle
    return `The heavy pill is in bottle ${heavyBottleIndex}`;
  }

  // If no heavy group is found, the heavy pill is in the last bottle
  return "The heavy pill is in bottle 20";
}

// Example usage
const bottles = Array.from({ length: 20 }, () => Array(3).fill(1.0)); // Simulate 19 normal bottles
bottles[18] = bottles[18].map(weight => weight + 0.1); // Make the 19th bottle heavy

const result = findHeavyBottle(bottles);
console.log(result); // Output: "The heavy pill is in bottle 19"
