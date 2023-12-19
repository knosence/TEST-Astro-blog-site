# DECORATOR PATTERN

## OVERVIEW

The Decorator Pattern is a structural design pattern that allows behavior to be added to an individual object dynamically, without affecting the behavior of other objects of the same class. The Decorator Pattern is used by software developers who want to add or modify the behavior of objects at runtime without subclassing. The Decorator Pattern can be applied in scenarios where the behavior of an object needs to be extended or modified dynamically, and when subclassing to achieve the desired behavior is impractical or would result in a large number of subclasses.

The Decorator Pattern is suitable when:

- When you need to add functionality to an object dynamically without affecting other instances of the same class.
- When you want to avoid the use of subclassing to extend the behavior of objects.
- When you want to add or modify the behavior of an object at runtime.

## PROS OF USING DECORATOR PATTERN

- Flexibility: The Decorator Pattern allows for flexible behavior modification at runtime, enabling new behaviors to be added without changing the original object's structure or behavior.
- Open for Extension: It allows for adding new behaviors by creating new decorators, making the system easily extensible without modifying existing code.
- Single Responsibility: Each decorator class has a single responsibility, promoting the principle of single responsibility and enhancing code maintainability.

## CONS OF USING DECORATOR PATTERN

- Complexity: Implementing the Decorator Pattern can result in a more complex code structure with multiple classes and layers of decorators.
- Runtime Overhead: The use of decorators introduces additional runtime overhead due to the wrapping of objects and the delegation of method calls.
- Order of Decorators: The order in which decorators are applied can impact the final behavior, and it may become challenging to manage and debug the order of decorators in complex scenarios.

## HOW TO IMPLEMENT DECORATOR PATTERN

1. Define Component Interface:
   - Create an interface or abstract class that defines the common methods for the core object and the decorators.
   - This component interface represents the base behavior that will be modified or extended.

2. Implement Concrete Component:
   - Create a concrete class that implements the component interface.
   - This class represents the core object that will be decorated.

3. Define Decorator Interface:
   - Create an interface or abstract class that extends the component interface.
   - This decorator interface declares the common methods for all decorators.

4. Implement Concrete Decorators:
   - Create concrete decorator classes that implement the decorator interface.
   - Each decorator class should have a reference to the component interface and provide additional functionality by delegating to the wrapped component.

5. Create Decorated Objects:
   - In the client code, instantiate the core object and wrap it with one or more decorators.
   - Decorators can be stacked, allowing for multiple layers of behavior modification.

6. Use Decorated Objects:
   - Use the decorated object in the client code as if it were the original core object.
   - The decorators transparently add or modify the behavior of the core object.
