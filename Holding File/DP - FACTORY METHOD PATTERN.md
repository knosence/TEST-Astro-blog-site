# FACTORY METHOD PATTERN

## OVERVIEW

The Factory Method Pattern is a creational design pattern that provides an interface for creating objects, but lets subclasses decide which class to instantiate. The Factory Method Pattern is used by software developers and architects who want to delegate the responsibility of object creation to subclasses, allowing for flexibility in object instantiation. The Factory Method Pattern can be applied in scenarios where a class cannot anticipate the type of objects it needs to create, and the decision depends on subclasses or runtime conditions.

The Factory Method Pattern is suitable when:

- A class needs to delegate the responsibility of object creation to its subclasses.
- A class wants to avoid tightly coupling with the concrete classes of objects it creates.
- A class wants to provide a hook for subclasses to extend and customize the object creation process.

## PROS OF USING FACTORY METHOD PATTERN

- Extensibility: The Factory Method Pattern allows for easy extension by subclasses, as they can provide their own implementation of the factory method to create different types of objects.
- Encapsulation: The pattern encapsulates the object creation process within the factory method, keeping the client code unaware of the specific class being instantiated.
- Loose Coupling: The Factory Method Pattern promotes loose coupling by allowing client code to depend on the abstract factory interface rather than concrete classes, making it easier to introduce new types of objects.

## CONS OF USING FACTORY METHOD PATTERN

- Complexity: Implementing the Factory Method Pattern may introduce additional complexity, as it requires defining and managing multiple factory classes and their relationships.
- Inflexibility: Once the factory method is defined, it may be challenging to introduce new types of objects that are not part of the existing hierarchy without modifying the abstract factory and all its subclasses.
- Runtime Overhead: The use of the Factory Method Pattern can introduce some runtime overhead due to the indirection involved in creating objects through factory methods.

## HOW TO IMPLEMENT FACTORY METHOD PATTERN

1. Define the Abstract Factory:
   - Create an abstract factory interface that declares the factory method for creating objects.
   - The factory method should return an object of the abstract product type.

2. Implement Concrete Factories:
   - Create concrete factory classes that implement the abstract factory interface.
   - Each concrete factory should override the factory method to create a specific type of object.

3. Define the Abstract Product:
   - Create an abstract product interface or class that declares the common methods that the created objects will implement.
   - The abstract product represents the type of object that will be created by the factory method.

4. Implement Concrete Products:
   - Create concrete product classes that implement the abstract product interface or extend the abstract product class.
   - Each concrete product represents a specific type of object that can be created by the factory method.

5. Client Code:
   - The client code should depend on the abstract factory interface and abstract product type.
   - Use the factory method to create objects, and work with the abstract product interface or class in the client code.
   - The client code remains unaware of the specific concrete classes being instantiated, allowing for flexibility and extensibility.
