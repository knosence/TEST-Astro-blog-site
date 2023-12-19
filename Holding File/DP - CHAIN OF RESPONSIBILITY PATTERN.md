# CHAIN OF RESPONSIBILITY PATTERN

## Overview

The Chain of Responsibility Pattern is a behavioral design pattern that allows an object to pass a request along a chain of potential handlers until the request is handled or reaches the end of the chain. The Chain of Responsibility Pattern is used by software developers who want to decouple the sender of a request from its receiver and provide multiple potential handlers for the request. The Chain of Responsibility Pattern can be applied in situations where there are multiple objects that can handle a request, and the specific handler needs to be determined dynamically at runtime.

The Chain of Responsibility Pattern is suitable when:
- The system should allow multiple objects to handle a request without specifying the exact handler in advance.
- The set of objects that can handle a request should be defined dynamically.
- The sender of a request should be decoupled from its receiver, allowing different handlers to be added or removed without affecting the sender.

## Pros to using Chain of responsibility pattern

- Flexibility: The Chain of Responsibility Pattern provides flexibility by allowing the system to dynamically determine the appropriate handler for a request. Handlers can be added, removed, or rearranged without affecting the client code.
- Loose Coupling: The pattern promotes loose coupling between the sender and receiver of a request. The sender only needs to know about the first handler in the chain, and the chain takes care of finding the appropriate handler.
- Single Responsibility: Each handler in the chain has a single responsibility, making the code more modular and maintainable.

## Cons to using Chain of responsibility pattern

- Guaranteed Handling: There is no guarantee that a request will be handled by any handler in the chain. If the request reaches the end of the chain without being handled, it may lead to undesired behavior or errors.
- Performance Impact: The chain traversal can introduce a performance overhead, especially if the chain is long or if each handler performs complex operations.
- Complexity: Implementing the Chain of Responsibility Pattern can introduce additional complexity to the codebase, as it requires designing and managing the chain of handlers.

## How to implement Chain of responsibility

1. Define Handler Interface:
   - Create an abstract handler interface that declares a method for handling a request.
   - This interface should also define a method for setting the next handler in the chain.

2. Implement Concrete Handlers:
   - Create concrete handler classes that implement the handler interface.
   - Each concrete handler should provide its own implementation for handling the request.
   - The concrete handler can either handle the request itself or delegate it to the next handler in the chain.

3. Build the Chain:
   - Instantiate the concrete handlers and connect them together to form the chain.
   - Set the next handler for each handler in the chain using the method defined in the handler interface.

4. Client Code:
   - The client code should have a reference to the first handler in the chain.
   - It sends a request to the first handler, which will either handle the request or pass it to the next handler in the chain.

5. Request Handling:
   - When a handler receives a request, it can decide whether to handle it or pass it to the next handler.
   - If the handler decides to handle the request, it performs the necessary actions.
   - If the handler passes the request to the next handler, it calls the next handler's handle method.

