# MERGE SORT
## OVERVIEW

Merge Sort is a comparison-based sorting algorithm that follows the divide-and-conquer approach to sort elements. Merge Sort can be implemented by programmers or software developers. Merge Sort is suitable for sorting any type of elements and can be used in various programming languages and environments. Merge Sort is efficient for sorting large datasets or arrays where the time complexity is less critical. It has a guaranteed worst-case time complexity of O(n log n), making it suitable for scenarios where a stable and predictable sorting algorithm is required.

## PROS OF USING MERGE SORT
- Stable Sorting: Merge Sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements during sorting.
- Guaranteed Worst-case Performance: Merge Sort has a worst-case time complexity of O(n log n), which ensures reliable performance regardless of the input data distribution.
- Simplicity and Modularity: Merge Sort's divide-and-conquer approach allows for easy implementation and code maintainability. It can be split into smaller sub-problems and combined to achieve the final sorted result.

## CONS OF USING MERGE SORT
- Additional Space Requirement: Merge Sort typically requires additional space proportional to the size of the input array, which can be a limitation for memory-constrained systems.
- Recursive Nature: Merge Sort relies on recursive function calls, which can lead to stack overflow errors for extremely large arrays if not properly optimized.
- Not In-place: Merge Sort usually requires additional space for merging sorted subarrays, making it less suitable for scenarios with limited memory resources.

## HOW TO IMPLEMENT MERGE SORT

To implement Merge Sort:

1. Divide:
   - Divide the input array into two halves, roughly equal in size.
   - Continue dividing recursively until each subarray contains only one element.

2. Merge:
   - Merge the sorted subarrays by comparing and combining the elements from both halves.
   - Create an auxiliary array or temporary storage to hold the merged result.

3. Comparison and Merging Process:
   - Compare the first elements of both subarrays and select the smaller (or larger) element.
   - Move the selected element to the result array and advance the corresponding subarray's index.
   - Repeat the comparison and merging process until all elements are processed.

4. Handle Remaining Elements:
   - If one subarray is exhausted while the other still has elements, copy the remaining elements directly to the result array.

5. Recursion and Conquer:
   - Repeat the divide and merge steps recursively for each subarray until all subarrays are sorted.

6. Return the Sorted Array:
   - Once the entire array is sorted, return the final sorted array.

By following these steps, Merge Sort divides the input array into smaller subarrays, sorts them individually, and merges them back together to obtain the final sorted result. It has a time complexity of O(n log n) in all cases and is known for its stability and predictable performance.
