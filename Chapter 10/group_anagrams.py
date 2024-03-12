# 10.2 
# Group Anagrams
# Write a method to sort an array of strings so that all the anagrams are next to each other.
#177, #182, #263, #342

# How do you check if two words are anagrams of each other? Think about what the definition of "anagram" is. Explain it in your own words.
# Two words are anagrams if they contain the same characters but in different orders. How can you put characters in order?
# Can you leverage a standard sorting algorithm?
# Do you even need to truly "sort"? Or is just reorganizing the list sufficient?

# 1. We iterate over each word in the input list strs.
# 2. For each word, we sort the characters in the word and use the sorted word as a key in our anagrams dictionary.
# 3. If the sorted word is already a key in our dictionary, we append the original word to the list of values for that key.
# 4. If the sorted word is not a key in our dictionary, we add it and set its value to a new list containing the original word.
# 5. Finally, we return the list of values from our dictionary, which are the grouped anagrams.

def group_anagrams(strs):
    anagrams = {}
    for word in strs:
        sorted_word = "".join(sorted(word))
        if sorted_word in anagrams:
            anagrams[sorted_word].append(word)
        else:
            anagrams[sorted_word] = [word]
    return list(anagrams.values())

print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

# The time complexity is O(NMlogM), where N is the number of words, and M is the maximum length of a word. 
# The space complexity is O(NM), as in the worst case, we need to store all the words in the dictionary.