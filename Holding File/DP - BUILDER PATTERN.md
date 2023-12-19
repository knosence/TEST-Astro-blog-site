# BUILDER PATTERN

## OVERVIEW

The Builder Pattern is a creational design pattern that separates the construction of complex objects from their representation, allowing the same construction process to create different representations. The Builder Pattern is used by software developers and architects who want to create objects with complex initialization processes and provide flexibility in configuring and creating different representations of the same object. The Builder Pattern can be applied in scenarios where the creation of an object involves multiple steps, complex initialization logic, or when there is a need to create different variations or configurations of an object.

The Builder Pattern is suitable when:

- The process of creating an object is complex and involves multiple steps or parameters.
- The object construction process needs to support different representations or variations.
- The object being created should be immutable or have its state controlled during construction.

## PROS OF USING BUILDER PATTERN

- Separation of Concerns: The Builder Pattern separates the construction logic from the main object, allowing for a clear separation of concerns and making the codebase easier to understand and maintain.
- Flexibility: The pattern provides flexibility in creating different representations or configurations of an object using the same construction process. It allows for easy variation without modifying the underlying object or client code.
- Encapsulation: The Builder Pattern encapsulates the construction process within the builder, hiding the details from the client code and providing a clean API for object creation.

## CONS OF USING BUILDER PATTERN
- Increased Complexity: Implementing the Builder Pattern can introduce additional complexity to the codebase, as it requires defining multiple classes (builder, director, product) and their interactions.
- Overhead: The use of the Builder Pattern can introduce some runtime and memory overhead due to the creation of additional objects and the need for coordinating between the builder and director.
- Dependency on the Builder: The client code becomes dependent on the builder interface and needs to be aware of the builder's API, which can introduce coupling between the client and the builder.

## HOW TO IMPLEMENT BUILDER PATTERN

1. Define the Product:
   - Create a class that represents the product to be built.
   - Include properties or methods that need to be set or initialized during the construction process.

2. Define the Builder:
   - Create an interface or abstract class that defines the methods for building the product.
   - Include methods for setting or initializing different aspects of the product.

3. Implement the Concrete Builder:
   - Create one or more concrete builder classes that implement the builder interface.
   - Each concrete builder should provide its own implementation for building the product.

4. Create the Director (optional):
   - If needed, create a director class that coordinates the building process.
   - The director can take inputs from the client code and use the builder to construct the product.

5. Client Code:
   - Create an instance of the builder and optionally the director.
   - Use the builder's methods to set or initialize the product's properties or aspects.
   - Optionally, use the director to initiate the construction process and obtain the final product.

