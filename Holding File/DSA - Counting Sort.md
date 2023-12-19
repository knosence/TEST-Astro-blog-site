# COUNTING SORT
## OVERVIEW

Counting Sort is an integer sorting algorithm that works by counting the number of occurrences of each distinct element and using arithmetic to determine the positions of each element in the output sequence. Counting Sort can be implemented by programmers or software developers. Counting Sort is suitable for sorting integer elements when the range of input values is not too large. It is commonly used when the input values are known to be within a specific range. Counting Sort is efficient when the range of input values is small compared to the number of elements to be sorted. It has a linear time complexity of O(n + k), where n is the number of elements and k is the range of input values.

## PROS OF USING COUNTING SORT
- Linear Time Complexity: Counting Sort has a time complexity of O(n + k), which is a significant improvement over comparison-based sorting algorithms that have a minimum time complexity of O(n log n).
- Efficient for Small Range of Values: Counting Sort performs exceptionally well when the range of input values is relatively small compared to the number of elements to be sorted.
- Stable Sorting Algorithm: Counting Sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements during sorting.

## CONS OF USING COUNTING SORT
- Limited Applicability: Counting Sort can only be used to sort integer elements and requires knowledge of the range of input values in advance.
- Additional Space Requirement: Counting Sort requires additional space proportional to the range of input values to store the count array.
- Not Suitable for Large Range of Values: Counting Sort becomes less efficient as the range of input values increases, as it may require a large amount of memory for the count array.

## HOW TO IMPLEMENT COUNTING SORT

To implement Counting Sort:

1. Determine the Range:
   - Identify the minimum and maximum values in the input array to determine the range of input values.

2. Counting Phase:
   - Create a count array of size (max - min + 1) to store the count of occurrences for each distinct value.
   - Traverse the input array and increment the count array for each element.

3. Cumulative Count:
   - Modify the count array by calculating the cumulative count.
   - Each element in the count array represents the number of elements less than or equal to its corresponding value.

4. Output Phase:
   - Create an output array of the same size as the input array.
   - Traverse the input array from right to left.
   - For each element, use the count array to determine its position in the output array.
   - Decrease the count value for the corresponding element in the count array.

5. Finalize:
   - The output array now contains the sorted elements.

By following these steps, Counting Sort efficiently sorts integer elements by counting occurrences and using arithmetic to determine their positions in the output sequence. It provides a linear time complexity of O(n + k) and is suitable for cases where the range of input values is small.
