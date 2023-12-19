# FACADE PATTERN

## OVERVIEW

The Facade Pattern is a structural design pattern that provides a simplified interface to a complex subsystem of classes, making it easier to use and understand. The Facade Pattern is used by software developers and architects who want to simplify the usage of a complex subsystem by providing a higher-level interface. The Facade Pattern can be applied in scenarios where a subsystem consists of multiple classes with intricate relationships and interactions, and there is a need to provide a unified interface to interact with the subsystem.

The Facade Pattern is suitable when:

- There is a need to provide a simple and straightforward interface to a complex subsystem.
- The subsystem is composed of multiple classes with complex interactions, and the client code should be shielded from this complexity.
- The client code needs to access only a subset of functionality provided by the subsystem.

## PROS OF USING FACADE PATTERN

- Simplicity: The Facade Pattern simplifies the usage of a complex subsystem by providing a single entry point and a unified interface. It hides the complexities of the subsystem and presents a simplified view to the client code.
- Encapsulation: By using the Facade Pattern, the client code interacts with a single facade object instead of dealing with multiple classes directly. This encapsulation protects the client code from changes in the subsystem and promotes loose coupling.
- Abstraction: The Facade Pattern provides an abstraction layer that separates the client code from the implementation details of the subsystem. This abstraction improves maintainability and allows for easier evolution of the subsystem.

## CONS OF USING FACADE PATTERN

- Limited Flexibility: The Facade Pattern can limit flexibility in some cases, as it provides a simplified interface that may not expose all the functionality or customization options of the subsystem. Changes or extensions to the subsystem may require modifications to the facade.
- Violation of Single Responsibility Principle: The facade can become bloated and violate the Single Responsibility Principle if it takes on too many responsibilities. Care must be taken to ensure that the facade remains focused and does not become a "god" object.
- Increased Coupling to the Facade: Client code that relies heavily on the facade may become tightly coupled to it. Changes in the facade can have a ripple effect on the client code, potentially requiring updates in multiple places.

## HOW TO IMPLEMENT FACADE PATTERN

1. Identify the Complex Subsystem:
   - Identify a set of related classes that form a complex subsystem with intricate interactions and dependencies.

2. Design the Facade:
   - Create a facade class that provides a simplified interface to the complex subsystem.
   - The facade should define methods that encapsulate and delegate the necessary functionality to the subsystem classes.

3. Define Subsystem Classes:
   - Identify and define the individual classes that form the complex subsystem.
   - These classes should be responsible for specific tasks or functionality within the subsystem.

4. Implement Facade Methods:
   - Inside the facade class, implement the methods that correspond to the desired operations provided by the subsystem.
   - The facade methods should coordinate the interactions between the subsystem classes and provide a simplified interface to the client code.

5. Expose the Facade to Clients:
   - Make the facade class accessible to the client code that needs to interact with the complex subsystem.
   - Clients should use the facade to access the subsystem's functionality rather than directly interacting with the subsystem classes.

6. Client Code Interaction:
   - The client code should interact with the facade class to perform operations on the subsystem.
   - The client code remains unaware of the complexities of the subsystem and benefits from the simplified interface provided by the facade.
