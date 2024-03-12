# 10.3 
# Search in Rotated Array
# Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. 
# You may assume that the array was originally sorted in increasing order.

# Can you modify binary search for this purpose?
# What is the runtime of your algorithm? What will happen if the array has duplicates?

# 1. Initialize the start and end indices as the first and last indices of the array.
# 2. Loop until the start index is less than or equal to the end index.
# 3. Find the middle index.
# 4. Check if the middle element is the target; if so, return the middle index.
# 5. Determine the sorted half of the array by comparing the start and middle elements.
# 6. Decide if the target is within the sorted half; if so, adjust the end index, otherwise adjust the start index.
# 7. Repeat the process until the target is found or the indices cross.

def search_rotated_array(arr, target):
    start, end = 0, len(arr) - 1

    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return mid
    
        # Left half is sorted
        if arr[start] <= arr[mid]:
            if arr[start] <= target <= arr[mid]:
                end = mid - 1
            else:
                start = mid + 1
        # Right half is sorted
        else:
            if arr[mid] <= target <= arr[end]:
                start = mid + 1
            else:
                end = mid -1
    
    return -1 # Target not found

# Example usage:
arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
target = 5
index = search_rotated_array(arr, target)
print(f'The index of {target} in the array is: {index}')

# The time complexity of the provided algorithm is O(log n), where n is the number of elements in the array. This is because the algorithm performs binary search, and at each step, it eliminates half of the remaining elements.
# The space complexity is O(1) as the algorithm uses a constant amount of extra space for variables like start, end, mid, and target. The space required does not grow with the size of the input array.