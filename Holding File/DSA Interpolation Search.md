# INTERPOLATION SEARCH
## OVERVIEW

Interpolation Search is a searching algorithm used to find the position of a target element in a sorted collection with uniformly distributed values. It estimates the position of the target element based on the values at the ends of the collection and then narrows down the search range using interpolation. Interpolation Search can be implemented by programmers or software developers who need to search for an element in a sorted collection with uniformly distributed values. Interpolation Search can be applied to any sorted collection with uniformly distributed values, such as arrays or linked lists. Interpolation Search is suitable when the collection is sorted and the values are uniformly distributed. It can be used to optimize the search process compared to other searching algorithms, such as binary search, when the distribution of values is known.

## PROS OF USING INTERPOLATION SEARCH
- Time Complexity: Interpolation Search has an average time complexity of O(log log n) for uniformly distributed data. It can be more efficient than binary search when the values are uniformly distributed, as it narrows down the search range more quickly.
- Uniform Distribution: Interpolation Search performs well on collections with uniformly distributed values, as it estimates the position of the target element based on the values at the ends.
- Optimized Search: Interpolation Search can provide faster search times compared to binary search in cases where the values are uniformly distributed, as it uses the distribution information to narrow down the search range.

## CONS OF USING INTERPOLATION SEARCH
- Uneven Distribution: Interpolation Search is not suitable for collections with unevenly distributed values, as it relies on the assumption of uniform distribution to estimate the position of the target element. In cases of uneven distribution, it may lead to suboptimal performance or incorrect results.
- Worst-case Time Complexity: In worst-case scenarios, where the values are not uniformly distributed or the target element is located at the ends of the collection, Interpolation Search can degrade to O(n), making it less efficient than other searching algorithms like binary search.
- Additional Calculations: Interpolation Search requires additional calculations to estimate the position of the target element based on the values at the ends, which may introduce overhead compared to simpler searching algorithms.

## HOW TO IMPLEMENT INTERPOLATION SEARCH

To implement Interpolation Search:

1. Set the starting and ending indices:
   - Initialize two variables, "start" and "end", with values 0 and the length of the collection minus one, respectively.

2. Perform the interpolation search:
   - While the target element is within the range of values at the "start" and "end" indices:
     - Calculate the interpolation position using the formula:
       - interpolationPos = start + ((target - collection[start]) * (end - start)) / (collection[end] - collection[start])
     - If the interpolation position is equal to the target element, return the index.
     - If the value at the interpolation position is greater than the target element, update the "end" index to the position before the interpolation position.
     - If the value at the interpolation position is less than the target element, update the "start" index to the position after the interpolation position.

3. Perform linear search within the remaining range:
   - Iterate from the "start" index to the "end" index:
     - If the current element is equal to the target element, return the index.

4. If the target element is found, return its index. Otherwise, return -1 to indicate that the element is not present in the collection.

By following these steps, Interpolation Search estimates the position of the target element using interpolation based on the values at the ends of the collection. It then narrows down the search range by adjusting the "start" and "end" indices. The time complexity of Interpolation Search is O(log log n) on average for uniformly distributed data, but it can degrade to O(n) in worst-case scenarios.
