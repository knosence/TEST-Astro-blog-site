# PROTOTYPE PATTERN

The Prototype Pattern is a creational design pattern that allows creating new objects by cloning existing objects. It is used to create new instances while keeping the object creation logic separate from the client code. The Prototype Pattern is used by software developers and architects who want to create new objects by cloning existing objects without being tightly coupled to their concrete classes. The Prototype Pattern is applicable in scenarios where the creation of objects is expensive or complex, and it is more convenient to clone existing objects rather than creating new ones from scratch.

The Prototype Pattern is suitable when:
- Creating new objects by cloning existing objects is more efficient than creating them from scratch.
- The system needs to hide the complexities of object creation and allow clients to create new instances by simply cloning existing ones.
- Objects need to be created dynamically at runtime based on certain configurations or conditions.

## Pros to using Prototype Pattern

- Flexibility: The Prototype Pattern provides flexibility by allowing objects to be created dynamically at runtime. Clients can create new objects by cloning existing ones, avoiding the need for complex instantiation logic.
- Performance: Creating new objects by cloning existing ones can be more efficient than creating them from scratch. It eliminates the overhead of initializing objects and reduces the time and resources required for object creation.
- Encapsulation: The Prototype Pattern encapsulates the object creation logic within the prototype objects, keeping it separate from the client code. This promotes better separation of concerns and improves code maintainability.

## Cons to using Prototype Pattern

- Shallow Copy Limitation: Cloning objects using the Prototype Pattern typically performs a shallow copy, which means that the internal objects are not cloned. This can lead to unintended sharing of mutable internal objects between cloned instances.
- Complexity of Cloning: Cloning complex objects with deep hierarchies or circular references can be challenging and error-prone. Care must be taken to ensure that all the internal objects are correctly cloned.
- Increased Memory Usage: Cloning objects can lead to increased memory usage, especially if the objects being cloned are large or contain a significant amount of data.

## How to implement Prototype Pattern

1. Design the Prototype Interface:
   - Create a prototype interface that declares a method for cloning itself.
   - The interface should define the contract for the cloning behavior.

2. Implement Concrete Prototypes:
   - Create concrete prototype classes that implement the prototype interface.
   - Each concrete prototype should provide its own implementation of the clone method to create a copy of itself.

3. Clone Objects:
   - In the client code, obtain a reference to an existing prototype object.
   - Use the clone method provided by the prototype interface to create a new instance by cloning the existing object.

4. Customize Cloned Objects (optional):
   - If required, modify the cloned object by setting different values for its properties or updating its state.

5. Use Cloned Objects:
   - Use the cloned objects in the client code as needed.
   - The cloned objects will have the same initial state as the original object but can be modified independently.

