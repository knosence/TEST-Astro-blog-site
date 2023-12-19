# LINEAR SEARCH
## OVERVIEW

Linear Search is a simple search algorithm that iterates through the elements of a collection, one by one, until the target element is found or the entire collection has been traversed. Linear Search can be implemented by programmers or software developers. Linear Search can be applied to any collection or data structure that supports sequential access, such as arrays, linked lists, or linearly ordered data. Linear Search is commonly used when the collection is unordered or the size of the collection is small. It is less efficient for large collections compared to more advanced search algorithms like binary search.

## PROS OF USING LINEAR SEARCH
- Simplicity: Linear Search is straightforward to implement and understand, requiring minimal code and logic.
- Versatility: Linear Search can be used on any collection or data structure, regardless of its organization or order.
- No Preprocessing: Linear Search does not require any preprocessing or sorting of the collection, making it suitable for dynamic or unsorted data.

## CONS OF USING LINEAR SEARCH
- Inefficient for Large Collections: Linear Search has a time complexity of O(n), where n is the number of elements in the collection. It needs to iterate through each element, resulting in slower performance for large collections.
- Lack of Optimization: Linear Search checks each element sequentially, regardless of their order or potential patterns, leading to unnecessary comparisons.
- Limited Use for Sorted Collections: Linear Search is less effective for sorted collections, as it does not take advantage of the ordering to optimize the search.

## HOW TO IMPLEMENT LINEAR SEARCH

To implement Linear Search:

1. Start from the first element:
   - Begin with the first element of the collection.

2. Iterate through the elements:
   - Compare the current element with the target element.
   - If a match is found, return the index or position of the element.
   - If the current element does not match the target, move to the next element.

3. Repeat until the end of the collection:
   - Continue iterating through the elements until either the target element is found or the end of the collection is reached.

4. Return the result:
   - If the target element is found, return the index or position of the element.
   - If the target element is not found, return a predefined value or indication (e.g., -1) to indicate the absence of the element.

By following these steps, Linear Search sequentially compares each element of the collection with the target element until a match is found or the end of the collection is reached. Its time complexity of O(n) makes it suitable for small or unsorted collections, but it becomes less efficient for larger collections where more advanced search algorithms are preferred.
