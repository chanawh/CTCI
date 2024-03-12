# 10.1 
# Sorted Merge
# You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B.
# Write a method to merge B into A in sorted order.

# Try moving from the end of the array to the beginning.
# 1. Initialize two pointers, one for the last element of array A (excluding the buffer) and another for the last element of array B.
# 2. Compare the elements at these pointers and place the larger one at the end of the buffer in array A.
# 3. Move the pointer of the array from which you took the last element one step back.
# 4. Repeat steps 2 and 3 until all elements of B are merged into A.

def sorted_merge(A, m, B, n):
    # m and n are the number of elements in A and B, respectively
    indexA = m - 1 # Last element in index A
    indexB = n - 1 # Last element in index B
    merge_index = m + n - 1 # End of merged array

    # Merge A and B, starting from the last element in each
    while indexB >= 0:
        if indexA >= 0 and A[indexA] > B[indexB]:
            A[merge_index] = A[indexA]
            indexA -= 1
        else:
            A[merge_index] = B[indexB]
            indexB -= 1
        merge_index -= 1
    
    return A

# Example usage:
# A has a buffer large enough to hold B
A = [1, 3, 5, 7, 9, None, None, None, None]
B = [2, 4, 6, 8]
sorted_merge(A, 5, B, 4)
print(A)

# The time complexity of the Sorted Merge algorithm is O(n + m), where n is the number of elements in array A and m is the number of elements in array B. This is because each element from both arrays will be looked at once when merging.
# The space complexity is O(1), as the merge is done in place and no additional storage is needed beyond the buffer space already provided in array A for array B's elements. The only extra space used is for the pointers and indices, which use a constant amount of space.