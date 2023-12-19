# BUBBLE SORT
## OVERVIEW

Bubble Sort is a simple comparison-based sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order. Bubble Sort can be implemented by programmers or software developers. Bubble Sort is suitable for sorting small arrays or arrays with a nearly sorted structure. It can be used in various programming languages and environments. Bubble Sort is typically used when simplicity and ease of implementation are more important than sorting efficiency. It is not recommended for large datasets or arrays.

## PROS OF USING BUBBLE SORT
- Ease of Implementation: Bubble Sort has a straightforward implementation with a minimal number of operations, making it easy to understand and implement.
- Simple Logic: Bubble Sort's logic is easy to grasp, involving only a comparison and swap between adjacent elements.
- Adaptive Sorting: Bubble Sort is adaptive, meaning it can detect if the input array is already sorted and terminate early, resulting in improved performance in some cases.

## CONS OF USING BUBBLE SORT
- Quadratic Time Complexity: Bubble Sort has an average and worst-case time complexity of O(n^2), making it inefficient for large datasets or arrays.
- Lack of Efficiency: Bubble Sort's repetitive swapping of adjacent elements can result in unnecessary comparisons and swaps, especially in arrays with significant disorder.
- Limited Use Cases: Bubble Sort is primarily suitable for small arrays or nearly sorted arrays and is not recommended for complex sorting scenarios.

## HOW TO IMPLEMENT BUBBLE SORT

To implement Bubble Sort:

1. Start from the first element:
   - Begin with the first element of the array.

2. Compare and Swap:
   - Compare the current element with the next element.
   - If the current element is greater (or smaller) than the next element, swap them.

3. Repeat:
   - Move to the next pair of elements and repeat step 2 until the end of the array is reached.

4. Continue Iterations:
   - Repeat steps 1 to 3 for the remaining iterations.
   - In each iteration, the largest (or smallest) element "bubbles" to the end of the array.

5. Optimized Approach:
   - To optimize Bubble Sort, introduce a flag that tracks whether any swaps were made during an iteration.
   - If no swaps occur in an iteration, it indicates that the array is already sorted, and the algorithm can terminate early.

6. Return the Sorted Array:
   - Once all iterations are completed, the array is sorted, and you can return the final sorted array.


