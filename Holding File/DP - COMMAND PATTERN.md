# COMMAND PATTERN

## OVERVIEW

The Command Pattern is a behavioral design pattern that encapsulates a request or operation as an object, allowing clients to parameterize and queue operations, and support undoable operations. The Command Pattern is used by software developers and architects who want to decouple the sender of a request from the receiver, parameterize and queue operations, and support undo/redo functionality.

The Command Pattern can be applied in scenarios where:

- A system needs to decouple the sender of a request from the receiver, allowing for more flexibility and extensibility.
- Clients need to parameterize and queue operations, and execute them at different points in time.
- Undo/redo functionality is required to revert or replay executed operations.

The Command Pattern is suitable when:

- A system needs to support operations that can be executed, undone, or redone independently.
- A system needs to parameterize requests or operations with different data.
- A system needs to support an undo/redo feature for user actions.

## PROS OF USING COMMAND PATTERN
- Decoupling: The Command Pattern decouples the sender of a request from the receiver, allowing for more flexibility and extensibility. The sender does not need to know anything about the receiver or how the request is handled.
- Undo/Redo: The Command Pattern provides a straightforward way to implement undo/redo functionality by storing a history of executed commands. This allows users to revert or replay operations easily.
- Queueing and Scheduling: The Command Pattern allows clients to queue or schedule operations for execution at a later time, providing a way to manage and control the order of execution.

## CONS OF USING COMMAND PATTERN
- Increased Complexity: Implementing the Command Pattern can introduce additional complexity due to the need for defining command classes, managing command history, and coordinating between commands and receivers.
- Memory Overhead: Storing command objects and their history may require additional memory resources, especially for long command histories or complex command objects.
- Runtime Overhead: The use of command objects introduces some runtime overhead due to the indirection involved in executing commands and managing their state.

## HOW TO IMPLEMENT COMMAND PATTERN

1. Define Command Interface:
   - Create a command interface that declares a method(s) for executing the command.
   - The interface should define a method(s) that encapsulates the operation to be performed.

2. Implement Concrete Command Classes:
   - Create concrete command classes that implement the command interface.
   - Each concrete command class represents a specific operation or request and holds a reference to the receiver object that performs the actual work.

3. Define Receiver Class(es):
   - Create receiver class(es) that define the actual implementation of the operations that can be performed by commands.
   - The receiver classes encapsulate the functionality and provide the necessary methods for executing the commands.

4. Create Invoker:
   - Create an invoker class that acts as the sender of the request.
   - The invoker holds a reference to a command object and can execute the command when needed.

5. Set Up Client Code:
   - The client code should create instances of the receiver and command objects and wire them together.
   - The client decides which commands to execute and can queue or schedule commands for execution.

6. Execute Commands:
   - The client code can execute commands by invoking the appropriate method(s) on the command object.
   - The command object calls the corresponding method(s) on the receiver, delegating the actual work.

