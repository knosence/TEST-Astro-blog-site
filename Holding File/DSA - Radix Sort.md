# RADIX SORT
## OVERVIEW

Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits. Radix Sort can be implemented by programmers or software developers. Radix Sort is suitable for sorting integer elements when the range of input values is not too large. It is commonly used when the input values have a fixed number of digits. Radix Sort is efficient when the number of digits in the input values is relatively small compared to the number of elements to be sorted. It has a time complexity of O(d * (n + k)), where d is the number of digits, n is the number of elements, and k is the range of input values.

## PROS OF USING REDIX SORT
- Non-Comparative Sorting: Radix Sort does not rely on element comparisons, making it advantageous for certain scenarios where comparisons are expensive or not applicable.
- Linear Time Complexity: Radix Sort has a time complexity of O(d * (n + k)), which is generally faster than comparison-based sorting algorithms for large datasets.
- Stable Sorting Algorithm: Radix Sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements during sorting.

## CONS OF USING REDIX SORT
- Limited Applicability: Radix Sort is specifically designed for sorting integers or fixed-size keys. It is not applicable to general-purpose sorting scenarios.
- Additional Space Requirement: Radix Sort requires additional space to store intermediate buckets or queues during the sorting process.
- Dependency on Number of Digits: Radix Sort's performance is influenced by the number of digits in the input values, which can affect its time complexity.

## HOW TO IMPLEMENT RADIX SORT

To implement Radix Sort:

1. Identify the Number of Digits:
   - Determine the maximum number of digits among the input values to know the number of iterations required for sorting.

2. Perform Digit-wise Sorting:
   - Start with the least significant digit (rightmost) and proceed to the most significant digit (leftmost).
   - Divide the input values into separate buckets or queues based on the current digit being considered.

3. Sort within Each Digit Bucket:
   - For each digit bucket, use a stable sorting algorithm (such as Counting Sort or Insertion Sort) to sort the elements within that bucket.

4. Concatenate the Sorted Buckets:
   - After sorting each digit bucket, concatenate the buckets in the original order to obtain the sorted array.

5. Repeat for Next Significant Digit:
   - Continue the digit-wise sorting process for the next significant digit until all digits have been processed.

By following these steps, Radix Sort performs digit-by-digit sorting, resulting in a sorted array of elements. It has a time complexity of O(d * (n + k)) and is suitable for scenarios where the number of digits is small compared to the number of elements.
