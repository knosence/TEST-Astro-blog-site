# SINGLETON PATTERN

## OVERVIEW

The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to it. The Singleton Pattern is used by software developers who want to restrict the instantiation of a class to a single object and provide a global access point to that object. The Singleton Pattern can be applied in scenarios where there should be only one instance of a class throughout the application and that instance needs to be accessed globally.

The Singleton Pattern is suitable when:

- There should be exactly one instance of a class, and clients should be able to access that instance easily.
- Lazy initialization of the instance is preferred.
- The singleton object needs to be shared across multiple parts of the application.

## PROS TO USING SINGLETON PATTERN

- Single Instance: The Singleton Pattern ensures that only one instance of a class exists, providing a global access point to it. This is useful in scenarios where having multiple instances of a class can cause issues or conflicts.
- Global Access: The Singleton Pattern allows for easy and centralized access to the singleton instance throughout the application. It avoids the need for passing references to objects and simplifies object sharing.
- Resource Management: By controlling the instantiation of a class to a single instance, the Singleton Pattern helps manage and optimize shared resources efficiently.

## CONS TO USING SINGLETON PATTERN

- Global State: The use of a singleton introduces global state into the application, which can make the code harder to test, maintain, and reason about.
- Coupling: The Singleton Pattern can lead to tight coupling between classes and may hinder flexibility and testability.
- Potential Overuse: Developers may be tempted to use the singleton pattern excessively, which can make the code more complex and less modular.

## HOW TO IMPLEMENT SINGLETON PATTERN

1. Declare a private static instance variable:
   - Create a private static variable in the class to hold the single instance of the class.
   - The variable should be static to ensure that there is only one instance shared by all instances of the class.

2. Define a private constructor:
   - Create a private constructor to prevent direct instantiation of the class from outside.
   - This ensures that the class cannot be instantiated multiple times.

3. Create a public static getInstance() method:
   - Implement a public static method that provides access to the singleton instance.
   - Within the method, check if the instance already exists. If it does, return the existing instance. If not, create a new instance and return it.

4. Lazy initialization (optional):
   - If the singleton instance should be lazily initialized (created only when needed), add lazy initialization logic in the getInstance() method.
   - This can be done by checking if the instance is null before creating it.

5. Handle multi-threading (optional):
   - If the singleton class needs to be thread-safe, add synchronization to the getInstance() method to handle concurrent access.
   - Use synchronization mechanisms like locks, double-checked locking, or synchronized blocks to ensure thread safety.

6. Provide additional methods (optional):
   - If the singleton class needs to provide additional functionality, define public methods as needed.
   - These methods can be accessed through the singleton instance obtained from the getInstance() method.

