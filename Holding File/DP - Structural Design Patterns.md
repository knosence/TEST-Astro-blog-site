# STRUCTURAL DESIGN PATTERNS

## Overview

The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects, where multiple observers are notified and updated automatically when the state of a subject object changes. The Observer Pattern is used by software developers and architects who want to establish loose coupling between objects and ensure that changes in one object are automatically reflected in dependent objects. The Observer Pattern can be applied in scenarios where there is a need for real-time synchronization and communication between objects, such as event-driven systems, GUI frameworks, and distributed systems.

The Observer Pattern is suitable when:
- There is a one-to-many relationship between objects, and changes in one object should be propagated to multiple dependent objects.
- The system needs to maintain consistency between related objects without explicitly coupling them.
- The system should allow new observers to be added and existing observers to be removed dynamically.

## Pros of using Structural Design Patterns

- Loose Coupling: The Observer Pattern promotes loose coupling between objects by ensuring that subjects and observers are independent of each other. They can vary and evolve independently.
- Modularity: The Observer Pattern allows for a modular and extensible design, as new observers can be easily added without modifying the existing subject or observer classes.
- Event-Driven Communication: By using the Observer Pattern, objects can communicate and respond to events in a decoupled and reactive manner, making it suitable for event-driven architectures.

## Cons of using Structural Design Patterns

- Performance Overhead: The Observer Pattern can introduce some performance overhead, especially when there are a large number of observers or frequent updates. Care should be taken to optimize performance if needed.
- Unintended Updates: If observers are not properly managed, they may receive updates even when they are not interested in the specific changes. This can lead to unnecessary processing and potential inefficiencies.
- Complexity: Implementing the Observer Pattern can introduce additional complexity to the codebase, as it requires defining and managing the relationships between subjects and observers.

## How to implement Structural Design Patterns

1. Define the Subject Interface:
   - Create an interface that defines the operations for attaching, detaching, and notifying observers.
   - The subject interface should also include a method to get the current state or data being observed.

2. Implement the Subject Class:
   - Create a subject class that implements the subject interface.
   - Maintain a collection of observers and provide methods to add and remove observers.
   - Implement the notify method to iterate through the observers and invoke their update methods.

3. Define the Observer Interface:
   - Create an interface that declares the update method.
   - The update method should be implemented by all observer classes to handle the notification from the subject.

4. Implement the Observer Classes:
   - Create concrete observer classes that implement the observer interface.
   - Each observer class should define the logic for updating itself based on the changes notified by the subject.

5. Register and Update Observers:
   - In the client code, create instances of the subject and observer classes.
   - Register the observers with the subject using the attach method.
   - When the state of the subject changes, call the notify method to update all registered observers.


### [[DP - ADAPTER PATTERN|Adapter Pattern:]]

### [[DP - BRIDGE PATTERN|Bridge Pattern:]]

### [[DP - COMPOSITE PATTERN|Composite Pattern:]]

### [[DP - DECORATOR PATTERN|Decorator Pattern:]]

### [[DP - FACADE PATTERN|Facade Pattern:]]

### [[DP - FLYWEIGHT PATTERN|Flyweight Pattern:]]

### [[DP - PROXY PATTERN|Proxy Pattern:]]

