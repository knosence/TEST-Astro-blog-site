# PROXY PATTERN

## OVERVIEW

The Proxy Pattern is a structural design pattern that provides a surrogate or placeholder for another object to control access to it. The Proxy Pattern is used by software developers and architects who want to add an additional layer of control and functionality to objects while keeping the interface consistent. The Proxy Pattern can be applied in scenarios where access to an object needs to be controlled or additional operations need to be performed before or after accessing the object.

The Proxy Pattern is suitable when:

- Access to an object needs to be restricted or controlled.
- Additional operations, such as logging, caching, or security checks, need to be performed before or after accessing the object.
- The creation and initialization of an object is expensive, and it should only be instantiated when needed.

## PROS OF USING PROXY PATTERN

- Access Control: The Proxy Pattern allows for controlling access to an object by adding checks or restrictions before allowing the actual access. This can help enforce security policies or limit access to sensitive resources.
- Enhanced Functionality: By using proxies, additional functionality can be added without modifying the actual object. This enables features like logging, caching, lazy loading, or remote access to be seamlessly integrated.
- Performance Optimization: Proxies can be used to optimize the performance by postponing the creation or initialization of an object until it is actually needed. This can save resources and improve the overall system efficiency.

## CONS OF USING PROXY PATTERN

- Increased Complexity: Implementing proxies adds an additional layer of complexity to the codebase, as it requires defining interfaces, implementing proxy classes, and managing the interaction between the proxy and the actual object.
- Indirection: The use of proxies introduces an extra level of indirection, which can slightly impact the performance of accessing the object compared to direct access.
- Potential Overhead: Depending on the functionality implemented in the proxy, there can be overhead in terms of memory usage and execution time.

## HOW TO IMPLEMENT PROXY PATTERN

1. Define the Subject Interface:
   - Create an interface that defines the common methods to be accessed by both the proxy and the real object.
   - This interface acts as a contract for the client code.

2. Implement the Real Object:
   - Create a class that implements the subject interface and represents the real object.
   - This class contains the actual business logic and functionality.

3. Implement the Proxy Class:
   - Create a class that also implements the subject interface.
   - The proxy class holds a reference to the real object and delegates calls to it.
   - Additional functionality, such as access control, logging, or caching, can be added before or after delegating the calls to the real object.

4. Modify the Client Code:
   - Replace direct usage of the real object with the proxy object in the client code.
   - The client code interacts with the proxy object, which handles the communication with the real object internally.

5. Instantiate and Use the Proxy:
   - Create an instance of the proxy class and pass the real object to it, either during instantiation or through a setter method.
   - Use the proxy object as a substitute for the real object, performing operations through the proxy.
