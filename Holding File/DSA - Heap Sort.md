# Heap Sort
## Overview
Heap Sort is a sorting algorithm that uses a binary heap data structure to sort elements. It builds a max (or min) heap from the array and repeatedly extracts the maximum (or minimum) element to form the sorted array. Heap Sort can be implemented by programmers or software developers. Heap Sort can be used in various applications where sorting is required, such as sorting elements in an array or a list. Heap Sort is suitable for sorting large datasets efficiently. It performs well in practice and is often used when a stable sorting algorithm with a guaranteed worst-case time complexity of O(n log n) is required.

## Pros of using Heap Sort
- Guaranteed Worst-case Time Complexity: Heap Sort has a worst-case time complexity of O(n log n) in all cases, making it an efficient sorting algorithm.
- In-place Sorting: Heap Sort can be implemented as an in-place sorting algorithm, which means it doesn't require additional memory beyond the input array.
- Stability: Heap Sort is a stable sorting algorithm, which means that the relative order of equal elements is preserved after sorting.

## Cons of using Heap Sort
- Not Adaptive: Heap Sort is not adaptive, which means it does not take advantage of partially sorted arrays. It performs equally in all cases, regardless of the initial order of elements.
- Lack of Cache Efficiency: Heap Sort does not have good cache efficiency compared to some other sorting algorithms like Quick Sort or Merge Sort, due to its memory access patterns.
- Non-Recursive Implementation: Heap Sort typically requires a non-recursive implementation, which may be more complex to understand and implement compared to recursive algorithms.

## How to implement Heap Sort
1. Build Heap:
   - Convert the input array into a binary heap data structure.
   - Iterate through the array from the last non-leaf node to the first element.
   - For each node, heapify the subtree rooted at that node.

2. Heapify:
   - To heapify a subtree rooted at a given index:
     - Compare the element at the current index with its left and right child (if any) to find the maximum (or minimum) element.
     - If the maximum (or minimum) element is not the current element, swap them.
     - Recursively heapify the affected child subtree.

3. Sort:
   - After building the heap, the maximum (or minimum) element is at the root of the heap.
   - Swap the root element with the last element of the heap (which is the largest or smallest element in the unsorted part).
   - Reduce the heap size by one and heapify the new root to maintain the heap property.
   - Repeat the above step until the heap is empty.
   - The elements are now sorted in ascending (for max heap) or descending (for min heap) order.

By following these steps, Heap Sort efficiently sorts the elements using a binary heap data structure, providing a worst-case time complexity of O(n log n) and stability in maintaining the relative order of equal elements.