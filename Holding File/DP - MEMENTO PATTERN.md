# MEMENTO PATTERN

## OVERVIEW

The Memento Pattern is a behavioral design pattern that allows an object to capture and externalize its internal state without violating encapsulation, and later restore the object to that state. The Memento Pattern is used by software developers who want to implement undo-redo functionality, maintain the state history of an object, or provide checkpoints and rollback mechanisms. The Memento Pattern can be applied in situations where there is a need to save and restore the state of an object, especially when the internal state cannot be exposed directly.

Behavioral design patterns are suitable when:

- When you want to save and restore the state of an object, while keeping the details of the state hidden from other objects.
- When you need to provide undo-redo functionality in an application.
- When you want to implement checkpoints or rollback mechanisms in a system.

## PROS TO USING MEMENTO PATTERN

- State Preservation: The Memento Pattern allows objects to preserve and restore their internal state, enabling them to revert to a previous state whenever needed.
- Encapsulation: The pattern ensures that the object's state is encapsulated and not exposed directly to other objects, thus maintaining encapsulation and information hiding.
- Undo-Redo and History: By using the Memento Pattern, you can easily implement undo-redo functionality or maintain a history of an object's states.

## CONS TO USING MEMENTO PATTERN

- Increased Memory Usage: The Memento Pattern can consume significant memory if there are frequent state snapshots and the state objects are large.
- Performance Impact: Storing and restoring the state of an object can impact the performance of the application, especially if the state is complex or the object has a large number of internal variables.
- Object State Visibility: Since the Memento Pattern encapsulates the state within the object or in a separate memento object, it may limit the visibility of the state to other objects or modules.

## HOW TO IMPLEMENT MEMENTO PATTERN

1. Originator Class:
   - Create an originator class that represents the object whose state needs to be preserved.
   - The originator should have methods to set and get its internal state, as well as a method to create a memento object.

2. Memento Class:
   - Create a memento class that represents the snapshot of the originator's state.
   - The memento class should store the necessary information to restore the originator's state.

3. Caretaker Class:
   - Create a caretaker class that is responsible for storing and managing the memento objects.
   - The caretaker should have methods to save a memento, retrieve a specific memento, and restore the originator's state from a memento.

4. Client Code:
   - In the client code, create an instance of the originator class and perform operations on it.
   - Use the originator's methods to create mementos and pass them to the caretaker for storage or retrieval.

5. State Restoration:
   - If the originator needs to restore its state, it can request a specific memento from the caretaker and use it to restore the internal state.
