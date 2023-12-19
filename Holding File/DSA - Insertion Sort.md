# INSERTION SORT
## OVERVIEW

Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. Insertion Sort can be implemented by programmers or software developers. Insertion Sort is suitable for sorting small arrays or partially sorted arrays. It can be used in various programming languages and environments. Insertion Sort performs well on small arrays or partially sorted arrays, where its simplicity and low overhead make it an efficient choice.

## PROS OF USING INSERTION SORT
- Adaptive Sorting: Insertion Sort is adaptive, meaning it efficiently handles partially sorted arrays by taking advantage of the existing order, resulting in improved performance.
- In-place Sorting: Insertion Sort can sort elements in-place, without requiring additional memory beyond the input array itself.
- Simple Implementation: Insertion Sort has a straightforward implementation with a small number of operations, making it easy to understand and implement.

## CONS OF USING INSERTION SORT
- Quadratic Time Complexity: Insertion Sort has an average and worst-case time complexity of O(n^2), making it inefficient for large datasets or arrays.
- Sensitivity to Input Order: The performance of Insertion Sort is sensitive to the initial order of elements. If the array is in reverse order, it will require more comparisons and swaps.
- Not Suitable for Large Datasets: Due to its quadratic time complexity, Insertion Sort becomes significantly slower as the number of elements increases.

## HOW TO IMPLEMENT INSERTION SORT

1. Start with the second element:
   - Begin with the second element of the array (index 1) and consider it as the key.

2. Compare and Shift:
   - Compare the key with the elements on the left side of it.
   - Shift the elements larger than the key one position to the right, creating a space for inserting the key.

3. Insert the Key:
   - Insert the key into the appropriate position in the sorted portion of the array.

4. Repeat:
   - Move to the next element (index) and repeat steps 2 and 3 until all elements are processed.

5. Return the Sorted Array:
   - Once all elements are processed, the array is sorted, and you can return the final sorted array.

By following these steps, Insertion Sort iterates through the array, comparing each element with the sorted portion of the array and inserting it into the correct position. It has an average and worst-case time complexity of O(n^2) but performs well on small arrays or partially sorted arrays.
