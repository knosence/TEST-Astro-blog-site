# ADAPTER PATTERN

## OVERVIEW 

The Adapter Pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It converts the interface of one class into another interface that clients expect. The Adapter Pattern is used by software developers and architects who want to make two incompatible interfaces work together without modifying their existing code. The Adapter Pattern can be applied in scenarios where existing classes or components have incompatible interfaces but need to collaborate or interact with each other.

The Adapter Pattern is suitable when:

- Existing code needs to be reused with a new system that has a different interface.
- Multiple independent or third-party components with incompatible interfaces need to be integrated.
- A consistent interface is required to work with different classes or components.

## PROS OF USING ADAPTER PATTERN

- Interface Compatibility: The Adapter Pattern allows objects with incompatible interfaces to work together by providing a common interface that both parties can understand.
- Reusability: The pattern enables the reuse of existing code or components that cannot be directly used due to incompatible interfaces, eliminating the need for code duplication.
- Flexibility: By using adapters, the client code remains unaware of the specific implementation details and can work with different objects through a consistent interface.

## CONS OF USING ADAPTER PATTERN

- Increased Complexity: Implementing adapters adds additional complexity to the codebase, as it requires defining and managing adapters between different interfaces.
- Runtime Overhead: The use of adapters introduces a level of indirection, which may result in a slight performance overhead during runtime.
- Maintenance: The addition of adapters may increase the codebase size and complexity, making it harder to maintain and understand the system.

## HOW TO IMPLEMENT ADAPTER PATTERN

1. Identify the Target Interface:
   - Determine the interface that the client code expects to interact with.

2. Create the Adapter Class:
   - Create an adapter class that implements the target interface and wraps the incompatible class or component.
   - The adapter class acts as a bridge between the client code and the incompatible interface.

3. Adapt the Incompatible Interface:
   - Inside the adapter class, adapt the incompatible methods or properties of the wrapped object to match the target interface.
   - This involves mapping or transforming method calls, data conversions, or any necessary adaptations.

4. Connect the Adapter:
   - Instantiate the adapter class and connect it with the client code or other components.
   - The client code will now interact with the adapter class, unaware of the underlying incompatible interface.

5. Test and Verify:
   - Test the interaction between the client code and the adapted object to ensure that the adapter works correctly and provides the expected behavior.

