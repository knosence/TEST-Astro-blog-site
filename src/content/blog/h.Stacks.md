---
title: Stacks
tags: ['Data Structures', 'Foundations of the Digital Architect']
date: 2023-12-18
---
# STACKS

## OVERVIEW

Stacks are a fundamental data structure that follows the Last-In-First-Out (LIFO) principle. It is a collection of elements in which the last element added is the first one to be removed. Stacks are commonly used in programming scenarios where you need to manage a collection of elements in a last-in-first-out manner, such as function call stacks, undo/redo operations, and expression evaluation. Stacks are used when you want to keep track of the order in which elements are added and need to access the most recently added element efficiently.

## PROS OF USING A STACK

- Last-In-First-Out (LIFO) Behavior: The Stack follows the LIFO principle, which makes it suitable for scenarios where the order of element retrieval is important.
- Simple and Intuitive: Stacks are a simple and easy-to-understand data structure, making them suitable for beginners and scenarios that require a straightforward implementation.
- Efficient Push and Pop Operations: Adding an element to the top of the stack (push) and removing the topmost element (pop) are efficient operations, typically performed in constant time.
- Efficient Space Utilization: Stacks use memory efficiently as they only require space for the elements in the stack and a few additional variables to maintain the structure.

## CONS OF USING A STACK

- Limited Access: Stacks only allow access to the topmost element. Accessing or modifying elements in the middle of the stack requires removing all the elements above it, which can be inefficient.
- Lack of Dynamic Sizing: Stacks usually have a fixed size or a maximum capacity. Once the capacity is reached, adding more elements may result in stack overflow errors.
- No Random Access: Unlike arrays or other data structures, stacks do not allow direct access to elements at arbitrary positions. Access to elements is limited to the top of the stack.
- Limited Functionality: Stacks have a specific set of operations (push, pop, peek) and are not suitable for scenarios that require complex data manipulation or searching.

## HOW TO IMPLEMENT AN Dynamic Arrays  STACKS
1. Define the Stack Data Structure:
    - Determine the underlying data structure to represent the stack. In this case, we will use an Dynamic Arrays , but you can choose other suitable data structures such as an array or a linked list.
2. Initialize the Stack:
    - Create a new instance of the Dynamic Arrays  or the chosen data structure to represent the stack.
3. Push (Add an Element to the Stack):
    - To add an element to the stack, perform the following steps:
        - Append the new element to the end of the Dynamic Arrays  using the appropriate method or operation.
        - Update any necessary variables or pointers to reflect the changes.
4. Pop (Remove and Return the Top Element from the Stack):
    - To remove and return the top element from the stack, perform the following steps:
        - Check if the stack is empty (size is 0). If it is, indicate an underflow condition or return an appropriate value indicating that the stack is empty.
        - Retrieve the top element from the end of the Dynamic Arrays  using the appropriate method or operation.
        - Remove the top element from the Dynamic Arrays  using the appropriate method or operation.
        - Return the retrieved top element.
5. Peek (Get the Top Element of the Stack):
    - To get the top element of the stack without removing it, perform the following steps:
        - Check if the stack is empty (size is 0). If it is, indicate an underflow condition or return an appropriate value indicating that the stack is empty.
        - Retrieve the top element from the end of the Dynamic Arrays  using the appropriate method or operation.
        - Return the retrieved top element without modifying the stack.
6. Check if the Stack is Empty:
    - To check if the stack is empty, perform the following steps:
        - Check if the size of the Dynamic Arrays  is 0. If it is, the stack is empty; otherwise, it contains elements.
7. Get the Size of the Stack:
    - To determine the size (number of elements) of the stack, perform the following steps:
        - Retrieve the size of the Dynamic Arrays  using the appropriate method or operation.
        - Return the retrieved size as the size of the stack.

## HOW TO IMPLEMENT AN LINKEDLIST STACKS
1. Define the Stack Data Structure:
    - Determine the underlying data structure to represent the stack. In this case, we will use a LinkedList, but you can choose other suitable data structures such as an array or a custom linked list implementation.
2. Initialize the Stack:
    - Create a new instance of the LinkedList or the chosen data structure to represent the stack.
3. Push (Add an Element to the Stack):
    - To add an element to the stack, perform the following steps:
        - Create a new node or element with the provided value.
        - Set the next pointer of the new node to point to the current top of the stack.
        - Update the top pointer to the new node, making it the new top of the stack.
4. Pop (Remove and Return the Top Element from the Stack):
    - To remove and return the top element from the stack, perform the following steps:
        - Check if the stack is empty (top pointer is null). If it is, indicate an underflow condition or return an appropriate value indicating that the stack is empty.
        - Retrieve the value of the top node.
        - Update the top pointer to point to the next node in the stack.
        - Return the retrieved value.
5. Peek (Get the Top Element of the Stack):
    - To get the top element of the stack without removing it, perform the following steps:
        - Check if the stack is empty (top pointer is null). If it is, indicate an underflow condition or return an appropriate value indicating that the stack is empty.
        - Retrieve the value of the top node.
        - Return the retrieved value without modifying the stack.
6. Check if the Stack is Empty:
    - To check if the stack is empty, perform the following steps:
        - Check if the top pointer is null. If it is, the stack is empty; otherwise, it contains elements.
7. Get the Size of the Stack:
    - To determine the size (number of elements) of the stack, perform the following steps:
        - Start from the top node and traverse the stack while counting the number of nodes.
        - Return the count as the size of the stack.

## Dynamic Arrays  STACKS VS LINKEDLIST STACKS

Dynamic Arrays  Stack:

- Pros:
  - Random access: Dynamic Arrays  provides constant time complexity for accessing elements by index, which can be useful in certain scenarios.
  - Efficient memory usage: Dynamic Arrays  uses a contiguous block of memory, resulting in efficient memory utilization.
- Cons:
  - Dynamic resizing: Dynamic Arrays  needs to resize its underlying array when it reaches capacity, which can be time-consuming.
  - Costly removals: Removing an element from the middle of an Dynamic Arrays  requires shifting subsequent elements, resulting in a time complexity of O(n).

LinkedList Stack:

- Pros:
  - Dynamic size: LinkedList provides efficient dynamic resizing as elements are added or removed, without the need for resizing operations.
  - Fast insertions and removals: Adding or removing elements from a LinkedList has a constant time complexity of O(1) since it involves updating the pointers.
- Cons:
  - No random access: LinkedList does not support direct access to elements by index, requiring traversal from the beginning of the list to reach a specific position.
  - Memory overhead: LinkedList uses additional memory to store the pointers between nodes, resulting in slightly higher memory consumption compared to an Dynamic Arrays .

Choosing between an Dynamic Arrays -based stack and a LinkedList-based stack depends on your specific use case and requirements. Consider the following factors:

- If you require random access to elements or efficient memory usage, an Dynamic Arrays -based stack might be more suitable.
- If you frequently add or remove elements, especially at the beginning or middle of the stack, a LinkedList-based stack can offer better performance.

Keep in mind that these comparisons are general and may vary depending on the specific implementation details and optimizations of the programming language or data structure library being used. It's always recommended to benchmark and evaluate the performance characteristics based on your specific needs before making a decision.
