# JUMP SEARCH
## OVERVIEW

Jump Search is a searching algorithm used to find the position of a target element in a sorted collection by making a series of jumps ahead and then performing linear search within that range. It is an optimization over the linear search algorithm. Jump Search can be implemented by programmers or software developers who need to search for an element in a sorted collection. Jump Search can be applied to any sorted collection, such as arrays or linked lists, where the elements are arranged in a specific order. Jump Search is suitable when the collection is sorted and the time complexity of the linear search needs to be reduced. It is particularly useful when the collection size is large and the elements are uniformly distributed.

## PROS OF USING JUMP SEARCH
- Time Complexity: Jump Search reduces the number of comparisons compared to linear search, resulting in better performance. It has a time complexity of O(sqrt(n)), which is more efficient than the linear search's O(n) time complexity.
- Sorted Collections: Jump Search requires the collection to be sorted, which ensures the effectiveness of the algorithm.
- Uniform Distribution: Jump Search performs well on collections with uniformly distributed elements, as it can make more efficient jumps and reduce the number of comparisons.

## CONS OF USING JUMP SEARCH
- Sequential Access: Jump Search performs better on sequential access data structures, such as arrays, compared to linked lists. In linked lists, jumping ahead by a fixed step size is not as efficient due to the lack of random access.
- Additional Memory: Jump Search does not require additional memory beyond a few variables for tracking indices and values. However, it does not provide the memory efficiency of binary search or other divide-and-conquer algorithms.
- Limited to Sorted Collections: Jump Search can only be used on sorted collections. If the collection is unsorted or frequently changing, the sorting step needs to be performed before applying the algorithm.

## HOW TO IMPLEMENT JUMP SEARCH

To implement Jump Search:

1. Determine the step size:
   - Calculate the step size (jump size) based on the square root of the collection size. Let's call it "stepSize".

2. Set the starting and ending indices:
   - Initialize two variables, "start" and "end", with values 0 and stepSize-1, respectively.

3. Perform the jump search:
   - While the target element is greater than the element at the "end" index:
     - Update the "start" index to the current "end" index.
     - Update the "end" index by adding the "stepSize" value.
     - If the "end" index exceeds the collection size, set it to the last index.

4. Perform linear search within the range:
   - Iterate from the "start" index to the "end" index:
     - If the current element is equal to the target element, return the index.
     - If the current element is greater than the target element, exit the loop.

5. If the target element is found, return its index. Otherwise, return -1 to indicate that the element is not present in the collection.

By following these steps, Jump Search divides the collection into blocks or chunks and performs linear search within each block until the target element is found or exceeded. The time complexity of Jump Search is O(sqrt(n)), where n is the size of the collection.
