# STRATEGY PATTERN

## OVERVIEW

The Strategy Pattern is a behavioral design pattern that defines a family of interchangeable algorithms and encapsulates each algorithm in a separate class. It allows the algorithms to be selected at runtime based on the client's requirements. The Strategy Pattern is used by software developers and architects who want to decouple the implementation of an algorithm from its usage. It is beneficial for systems that need to support multiple algorithms and allow clients to choose and switch between them dynamically. The Strategy Pattern can be applied in scenarios where there are multiple variations or versions of an algorithm and the specific algorithm needs to be selected at runtime. It is often used to implement business rules, data processing, or any functionality that involves different algorithmic approaches.

The Strategy Pattern is suitable when:
- Different variations or versions of an algorithm need to be encapsulated and treated as interchangeable objects.
- The client code should be able to select and switch between different algorithms dynamically.
- The behavior of an object needs to be configurable or extensible without modifying its structure.

## PROS OF USING STRATEGY PATTERN

- Flexibility: The Strategy Pattern provides flexibility by allowing clients to choose different algorithms at runtime. This enables dynamic behavior and adaptability in the system.
- Separation of Concerns: By encapsulating each algorithm in a separate class, the Strategy Pattern promotes separation of concerns, making the codebase easier to understand, maintain, and extend.
- Testability: The Strategy Pattern facilitates testing by allowing different algorithms to be tested independently. It also simplifies mocking and stubbing of algorithms during unit testing.

## CONS OF USING STRATEGY PATTERN

- Increased Complexity: Implementing the Strategy Pattern can introduce additional complexity to the codebase, as it requires defining multiple classes for each algorithm and handling the selection and configuration of strategies.
- Overhead: The Strategy Pattern may introduce some performance overhead due to the indirection involved in selecting and invoking the appropriate strategy at runtime.
- Potential Overuse: It is important to use the Strategy Pattern judiciously. Applying it to every algorithmic variation, especially in simple scenarios, can lead to unnecessary abstraction and code complexity.

## HOW TO IMPLEMENT STRATEGY PATTERN

1. Define Strategy Interface:
   - Create an interface that declares the method(s) for the algorithm.
   - The interface defines the contract for all strategies and ensures they have a common set of methods.

2. Implement Concrete Strategies:
   - Create concrete strategy classes that implement the strategy interface.
   - Each concrete strategy encapsulates a specific algorithm variation.

3. Context Class:
   - Create a context class that uses the strategy interface.
   - The context class maintains a reference to the current strategy object and delegates the algorithm execution to it.

4. Client Code:
   - In the client code, create an instance of the context class and set its strategy based on the desired algorithm.
   - The client code can dynamically switch between different strategies by setting the appropriate strategy object in the context.

5. Invoke the Algorithm:
   - Use the context object to invoke the algorithm.
   - The context delegates the algorithm execution to the current strategy object.
