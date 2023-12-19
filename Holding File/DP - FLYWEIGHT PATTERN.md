# FLYWEIGHT PATTERN

## Overview

The Flyweight Pattern is a structural design pattern that allows sharing common state between multiple objects, reducing memory usage and improving performance. The Flyweight Pattern is used by software developers and architects who want to optimize memory usage and improve performance in systems that involve a large number of lightweight objects. The Flyweight Pattern can be applied in scenarios where a system needs to create a large number of similar objects and can benefit from sharing common state among them.

The Flyweight Pattern is suitable when:
- The application uses a large number of objects that consume a significant amount of memory.
- Many objects have identical or similar intrinsic (invariant) state that can be shared.
- The objects' extrinsic (variant) state can be managed externally or computed on the fly.

## Pros of using Flyweight Pattern

- Memory Optimization: By sharing common state among multiple objects, the Flyweight Pattern reduces memory usage, as the shared state is stored in a separate data structure and referenced by multiple objects.
- Performance Improvement: With shared state, the Flyweight Pattern can improve performance by reducing the time and resources required to create and manipulate objects.
- Scalability: The Flyweight Pattern allows systems to handle a large number of objects more efficiently, making it suitable for scenarios with high object counts and limited resources.

## Cons of using Flyweight Pattern

- Increased Complexity: Implementing the Flyweight Pattern can introduce additional complexity to the codebase, as it requires managing and coordinating shared state between objects.
- Reduced Object Independence: Shared state can limit the independence of individual objects, as changes to the shared state may affect multiple objects simultaneously.
- Thread Safety Considerations: If multiple threads access and modify shared state concurrently, proper synchronization mechanisms must be implemented to ensure thread safety.

## How to implement FlyWeight Pattern

1. Analyze the Objects:
   - Identify the objects that have significant memory usage or are frequently created.
   - Determine the intrinsic (shared) state that can be extracted and managed externally.

2. Extract the Intrinsic State:
   - Create a separate class or data structure to represent the shared state.
   - Define the necessary data fields and methods to manage and access the shared state.

3. Modify the Objects:
   - Remove or minimize the intrinsic state from the individual objects.
   - Replace the intrinsic state with references to the shared state object.

4. Implement Flyweight Factory:
   - Create a flyweight factory class responsible for managing the shared state and creating or retrieving flyweight objects.
   - Maintain a pool or cache of flyweight objects to reuse them when requested.

5. Modify Client Code:
   - Update the client code to use the flyweight factory to create or retrieve flyweight objects.
   - Pass the extrinsic (variant) state as parameters to the flyweight objects when necessary.

6. Coordinate Shared State:
   - Ensure proper coordination and synchronization when multiple objects access and modify shared state concurrently.
   - Implement thread-safe mechanisms if required.

