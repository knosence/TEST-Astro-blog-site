# ITERATOR PATTERN

## OVERVIEW

The Iterator Pattern is a behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. The Iterator Pattern is used by software developers who want to decouple the traversal logic from the aggregate object, allowing for flexible iteration over the elements. The Iterator Pattern can be applied in scenarios where there is a need to iterate over the elements of a collection or aggregate object in a standardized way, regardless of the specific implementation details.

The Iterator Pattern is suitable when:

- There is a need to provide a common interface for iterating over different types of collections.
- The iteration logic needs to be separated from the collection or aggregate object, enabling multiple iterations or concurrent iterations.
- The client code should not have direct access to the internal structure or representation of the collection.

## PROS OF USING ITERATOR PATTERN

- Separation of Concerns: The Iterator Pattern separates the iteration logic from the aggregate object, promoting a clear separation of concerns and improving code modularity.
- Flexibility: By using the Iterator Pattern, clients can iterate over collections or aggregates without worrying about the specific implementation details, allowing for easy replacement or addition of new collection types.
- Encapsulation: The pattern encapsulates the iteration logic within the iterator, providing a clean and consistent interface for accessing elements regardless of the underlying data structure.

## CONS OF USING ITERATOR PATTERN

- Additional Complexity: Implementing the Iterator Pattern can introduce additional complexity to the codebase, as it requires defining iterator interfaces, concrete iterator implementations, and integrating them with the collection or aggregate object.
- Performance Overhead: Using iterators may introduce a slight performance overhead compared to direct iteration, as there is an additional layer of abstraction and method calls involved.
- Limited Functionality: The Iterator Pattern focuses on sequential access to elements and may not provide support for other advanced operations such as filtering, sorting, or random access.

## HOW TO IMPLEMENT ITERATOR PATTERN

1. Define Iterator Interface:
   - Create an iterator interface that declares methods for iterating over the elements of a collection or aggregate object.
   - The interface should provide methods like `hasNext()` to check if there are more elements, and `next()` to retrieve the next element.

2. Implement Concrete Iterators:
   - Create concrete iterator classes that implement the iterator interface.
   - Each iterator implementation should maintain a reference to the collection or aggregate object and keep track of the current position during iteration.

3. Define Aggregate Interface:
   - Create an aggregate interface that declares a method for creating an iterator object.
   - The interface should define a method like `createIterator()` that returns an instance of the iterator interface.

4. Implement Concrete Aggregates:
   - Create concrete aggregate classes that implement the aggregate interface.
   - Each concrete aggregate should provide its own implementation of the `createIterator()` method, returning an appropriate iterator object.

5. Use the Iterator:
   - In the client code, obtain an instance of the aggregate object.
   - Use the aggregate's `createIterator()` method to obtain an iterator.
   - Use the iterator's methods (`hasNext()` and `next()`) to iterate over the elements of the aggregate.
