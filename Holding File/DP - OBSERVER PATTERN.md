# OBSERVER PATTERN

## OVERVIEW

The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects. It establishes a mechanism where multiple observers (subscribers) are notified and updated automatically when a subject (publisher) undergoes a change. The Observer Pattern is used by developers who want to establish a loose coupling between objects and ensure that changes in one object are automatically propagated to multiple dependent objects. The Observer Pattern is applicable in scenarios where objects need to be notified and updated when a subject undergoes changes, without the subject having direct knowledge of its observers.

The Observer Pattern is suitable when:
- A one-to-many relationship needs to be established between objects, where changes in one object should be automatically reflected in multiple dependent objects.
- The subjects and observers should be loosely coupled, allowing for flexible and dynamic changes in the system.
- It is important to separate the concerns of the subject and observer, enabling easier maintenance and scalability.

## PROS OF USING OBSERVER PATTERN

- Loose Coupling: The Observer Pattern promotes loose coupling between subjects and observers. They can interact with each other without having direct knowledge of each other's implementations, enhancing modularity and maintainability.
- Event Handling: The pattern provides an efficient way to handle events or changes in a system, as observers can be dynamically added or removed without affecting the subject's functionality.
- Scalability: The Observer Pattern allows for easy extensibility by supporting a dynamic number of observers. New observers can be added to the system without modifying the existing codebase.

## CONS OF USING OBSERVER PATTERN

- Unexpected Updates: Observers may receive updates that they are not interested in, leading to unnecessary processing or performance overhead.
- Order of Notification: The order in which observers are notified may not be guaranteed, which can be problematic if observers depend on a specific order of updates.
- Memory Management: If observers are not properly managed and unregistered when they are no longer needed, memory leaks or unnecessary resource usage may occur.

## HOW TO IMPLEMENT OBSERVER PATTERN

1. Define Subject Interface:
   - Create an interface that defines the operations for attaching, detaching, and notifying observers.
   - The subject interface should also include a method to get the current state or data that the observers are interested in.

2. Implement Subject Class:
   - Create a subject class that implements the subject interface.
   - The subject class should maintain a list of observers and provide methods to attach, detach, and notify observers.

3. Define Observer Interface:
   - Create an interface that defines the update method to be implemented by observers.
   - The update method should be responsible for receiving and processing the updates from the subject.

4. Implement Observer Classes:
   - Create observer classes that implement the observer interface.
   - Each observer class should provide its own implementation for the update method, specifying how it handles the updates received from the subject.

5. Register Observers:
   - In the client code, create instances of the subject and observer classes.
   - Register the observers with the subject using the attach method, establishing the one-to-many relationship.

6. Notify Observers:
   - When the subject undergoes a change, call the notify method in the subject class.
   - This method should iterate over the list of attached observers and invoke their respective update methods, passing any necessary data or state changes.

