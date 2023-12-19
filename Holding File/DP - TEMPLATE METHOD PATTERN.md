# TEMPLATE METHOD PATTERN

## OVERVIEW

The Template Method Pattern is a behavioral design pattern that defines the skeleton of an algorithm in a base class and allows subclasses to provide the implementation of certain steps of the algorithm. The Template Method Pattern is used by software developers who want to define a common algorithm structure but allow variations in certain implementation details. The Template Method Pattern is applicable in scenarios where multiple classes share a similar algorithm but have different implementations for certain steps.

The Template Method Pattern is suitable when:
- There is a need to define a common algorithm structure that can be reused across multiple classes.
- Different variations of the algorithm are required, but the overall structure remains the same.
- There is a need to enforce a specific sequence of steps in the algorithm.

## PROS OF TEMPLATE METHOD PATTERN

- Code Reusability: The Template Method Pattern promotes code reuse by defining a common algorithm structure in a base class. Subclasses can then provide specific implementations for the varying steps of the algorithm.
- Flexibility: The pattern allows for flexibility in implementing certain steps of the algorithm while keeping the overall structure intact. This makes it easier to introduce new variations or modify existing ones without affecting the core algorithm.
- Encapsulation: The Template Method Pattern encapsulates the algorithm logic in a single place, making it easier to understand, maintain, and modify.

## PROS OF TEMPLATE METHOD PATTERN

- Inflexibility in Algorithm Structure: The Template Method Pattern enforces a fixed structure for the algorithm, which can limit flexibility in certain cases where the algorithm needs to be more dynamic or adaptable.
- Subclass Proliferation: As each variation of the algorithm requires a separate subclass, the pattern can lead to a large number of subclasses if there are many variations or combinations of steps.
- Difficulty in Understanding: The Template Method Pattern can make the codebase more complex and harder to understand, especially when there are multiple levels of abstraction and subclasses with varying implementations.

## HOW TO IMPLEMENT TEMPLATE METHOD PATTERN

1. Define the Abstract Base Class:
   - Create an abstract base class that defines the overall algorithm structure.
   - Define a template method that consists of a series of steps or actions, including both abstract and concrete methods.

2. Implement Abstract Methods:
   - Identify the steps of the algorithm that need to be implemented by subclasses.
   - Declare these steps as abstract methods in the abstract base class.

3. Provide Default Implementations:
   - Implement the common steps of the algorithm in the abstract base class.
   - These steps can be either concrete methods or provide default implementations.

4. Allow for Customization:
   - Define hooks or placeholders within the template method to allow subclasses to customize specific steps of the algorithm.
   - Hooks are empty methods in the abstract base class that can be overridden by subclasses.

5. Create Concrete Subclasses:
   - Create concrete subclasses that extend the abstract base class.
   - Implement the abstract methods to provide the specific variations of the algorithm.

6. Use the Template Method:
   - Instantiate and use the concrete subclasses in client code.
   - Invoke the template method on the subclass instances, which will execute the algorithm's steps in the defined order.

