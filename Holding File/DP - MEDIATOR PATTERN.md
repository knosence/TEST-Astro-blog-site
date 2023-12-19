# MEDIATOR PATTERN

## OVERVIEW

The Mediator Pattern is a behavioral design pattern that defines an object (the mediator) that encapsulates communication and coordination between multiple objects (colleagues) without them directly referencing each other. The Mediator Pattern is used by software developers and architects who want to promote loose coupling and maintain a centralized control over the communication between objects in a system. The Mediator Pattern can be applied in scenarios where a system involves a set of objects that need to communicate with each other, but direct dependencies between them would result in tight coupling and reduced flexibility.

The Mediator Pattern is suitable when:

- A system has a complex network of objects that need to communicate with each other, and managing the communication becomes challenging.
- Objects are tightly coupled due to direct communication, and changes in one object may require modifications in multiple objects.
- Adding new objects and changing the interaction patterns between objects are common requirements.

## PROS OF USING MEDIATOR PATTERN

- Decoupling: The Mediator Pattern promotes loose coupling between objects by removing direct dependencies. Objects communicate through the mediator, allowing them to be independent and unaware of each other's existence.
- Simplified Communication: The Mediator Pattern simplifies communication logic by centralizing it within the mediator object. This reduces the complexity of individual objects and makes the system easier to understand and maintain.
- Flexibility: By using a mediator, the system becomes more flexible and extensible. Adding new colleagues or changing communication patterns can be done within the mediator, without affecting the existing colleagues.

## CONS OF USING MEDIATOR PATTERN

- Increased Complexity: Implementing the Mediator Pattern can introduce additional complexity as it involves introducing a mediator and modifying existing objects to communicate through the mediator.
- Mediator Overhead: The mediator becomes a central point of communication, and its responsibilities may increase as the number of colleagues grows. This can potentially impact the performance of the system.
- Dependency on the Mediator: Objects become dependent on the mediator for communication, which may limit their reusability in different contexts.

## HOW TO IMPLEMENT MEDIATOR PATTERN

1. Define the Mediator Interface:
   - Create an interface that defines the methods for communication between objects (colleagues).
   - The interface should provide methods for colleagues to send messages and receive notifications.

2. Implement the Mediator:
   - Create a concrete mediator class that implements the mediator interface.
   - The mediator class is responsible for managing the communication and coordination between colleagues.

3. Define the Colleague Interface:
   - Create an interface that defines the methods that colleagues can use to communicate with the mediator.
   - The interface should declare methods for sending messages and receiving notifications from the mediator.

4. Implement Colleague Classes:
   - Create concrete colleague classes that implement the colleague interface.
   - Each colleague class should have a reference to the mediator object and use it to communicate with other colleagues.

5. Establish Communication:
   - In the colleague classes, use the mediator object to send messages and receive notifications.
   - When a colleague wants to communicate with another colleague, it sends a message to the mediator, which then forwards the message to the appropriate colleague.

6. Client Code:
   - The client code should create an instance of the mediator class and the colleague objects.
   - It should set the mediator object as the mediator for the colleagues and initiate communication by invoking methods on the colleagues.
