---
title: Queues
tags: ['Data Structures', 'Foundations of the Digital Architect']
date: 2023-12-18
number: 9
---
# QUEUES

## OVERVIEW

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It represents a collection of elements with two main operations: enqueue (adding an element to the back) and dequeue (removing the front element). Queues are commonly used in programming scenarios where you need to process elements in a first-in-first-out manner, such as handling requests, scheduling tasks, managing job queues, and implementing breadth-first search algorithms. Queues are used when you need to maintain a specific order of elements and require efficient insertion at the back and removal from the front.

## PROS OF USING A QUEUE

- First-In-First-Out (FIFO) Behavior: The Queue follows the FIFO principle, making it suitable for scenarios where the order of element processing is important.
- Simple and Intuitive: Queues are a straightforward and easy-to-understand data structure, making them suitable for beginners and scenarios that require a simple implementation.
- Efficient Enqueue and Dequeue Operations: Adding an element to the back of the queue (enqueue) and removing the front element (dequeue) are efficient operations, typically performed in constant time.
- Efficient Space Utilization: Queues use memory efficiently as they only require space for the elements in the queue and a few additional variables to maintain the structure.

## CONS OF USING A QUEUE

- Limited Access: Queues only allow access to the front and back elements. Accessing or modifying elements in the middle of the queue requires removing all the elements in front of it, which can be inefficient.
- Lack of Dynamic Sizing: Queues usually have a fixed size or a maximum capacity. Once the capacity is reached, adding more elements may result in queue overflow errors.
- No Random Access: Unlike arrays or other data structures, queues do not allow direct access to elements at arbitrary positions. Access to elements is limited to the front and back of the queue.
- Limited Functionality: Queues have a specific set of operations (enqueue, dequeue) and are not suitable for scenarios that require complex data manipulation or searching.  

## HOW TO IMPLEMENT A LINKEDLIST QUEUE

1. Define the Queue Data Structure:
    - Determine the underlying data structure to represent the queue. In this case, we will use a LinkedList, but you can choose other suitable data structures such as an array or a doubly linked list.
2. Initialize the Queue:
    - Create a new instance of the LinkedList or the chosen data structure to represent the queue.
    - Set any necessary variables or pointers to keep track of the front and rear of the queue.
3. Enqueue (Add an Element to the Queue):
    - To add an element to the queue, perform the following steps:
        - Create a new node or element with the given value.
        - If the queue is empty, set both the front and rear pointers to the new node.
        - Otherwise, set the rear pointer to the new node and update the next pointer of the previous rear node to point to the new node.
        - Update any necessary pointers or variables to reflect the changes.
4. Dequeue (Remove an Element from the Queue):
    - To remove an element from the queue, perform the following steps:
        - If the queue is empty (front is null), indicate an underflow condition or return an appropriate value indicating that the queue is empty.
        - Otherwise, retrieve the value from the front node.
        - Update the front pointer to point to the next node in the queue.
        - If the front becomes null, also update the rear pointer to null to indicate an empty queue.
        - Return the retrieved value.
5. Peek (Get the Element at the Front of the Queue):
    - To get the element at the front of the queue without removing it, perform the following steps:
        - If the queue is empty (front is null), indicate an underflow condition or return an appropriate value indicating that the queue is empty.
        - Otherwise, retrieve the value from the front node.
        - Return the retrieved value without modifying the queue.
6. Check if the Queue is Empty:
    - To check if the queue is empty, perform the following steps:
        - Check if the front pointer is null. If it is null, the queue is empty; otherwise, it contains elements.
7. Get the Size of the Queue:
    - To determine the size (number of elements) of the queue, perform the following steps:
        - Traverse the queue from the front to the rear, counting the number of nodes or elements encountered.
        - Return the count as the size of the queue.

## HOW TO IMPLEMENT AN Dynamic Arrays  QUEUE

1. Define the Queue Data Structure:
    - Determine the underlying data structure to represent the queue. In this case, we will use an Dynamic Arrays , but you can choose other suitable data structures such as an array or a linked list.
2. Initialize the Queue:
    - Create a new instance of the Dynamic Arrays  or the chosen data structure to represent the queue.
3. Enqueue (Add an Element to the Queue):
    - To add an element to the queue, perform the following steps:
        - Append the new element to the end of the Dynamic Arrays  using the appropriate method or operation.
        - Update any necessary variables or pointers to reflect the changes.
4. Dequeue (Remove an Element from the Queue):
    - To remove an element from the queue, perform the following steps:
        - Check if the queue is empty (size is 0). If it is, indicate an underflow condition or return an appropriate value indicating that the queue is empty.
        - Retrieve the element at the front of the queue using the appropriate method or operation.
        - Remove the element from the Dynamic Arrays  using the appropriate method or operation.
        - Return the retrieved element.
5. Peek (Get the Element at the Front of the Queue):
    - To get the element at the front of the queue without removing it, perform the following steps:
        - Check if the queue is empty (size is 0). If it is, indicate an underflow condition or return an appropriate value indicating that the queue is empty.
        - Retrieve the element at the front of the queue using the appropriate method or operation.
        - Return the retrieved element without modifying the queue.
6. Check if the Queue is Empty:
    - To check if the queue is empty, perform the following steps:
        - Check if the size of the Dynamic Arrays  is 0. If it is, the queue is empty; otherwise, it contains elements.
7. Get the Size of the Queue:
    - To determine the size (number of elements) of the queue, perform the following steps:
        - Retrieve the size of the Dynamic Arrays  using the appropriate method or operation.
        - Return the retrieved size as the size of the queue.

## Dynamic Arrays  QUEUES VS LINKEDLIST QUEUES

Dynamic Arrays -based Queue:

- Pros:
  - Random access: The underlying Dynamic Arrays  provides constant-time random access to elements, allowing efficient access to any position in the queue.
  - Efficient memory usage: The Dynamic Arrays  uses contiguous memory, which can be more memory-efficient than a LinkedList that requires additional memory for node objects.
  - Fast iteration: Iterating over the elements of an Dynamic Arrays  is typically faster due to its contiguous memory layout.
- Cons:
  - Dynamic resizing: When the Dynamic Arrays  needs to resize due to adding or removing elements, it may incur a performance penalty as it requires copying elements to a new array.
  - Costly removal from the front: Removing an element from the front of the Dynamic Arrays -based queue requires shifting all subsequent elements, resulting in a time complexity of O(n).

LinkedList-based Queue:

- Pros:
  - Efficient insertion and removal: Adding or removing elements at either end of the LinkedList (front or rear) can be done in constant time, resulting in efficient enqueue and dequeue operations.
  - No resizing overhead: The LinkedList does not require resizing as it dynamically allocates memory for each node as needed.
- Cons:
  - No random access: Unlike the Dynamic Arrays , the LinkedList does not provide constant-time random access to elements. Accessing an element at a specific position requires traversing the list from the front or rear, resulting in a time complexity of O(n).
  - Higher memory overhead: The LinkedList requires additional memory to store the node objects, which can result in higher memory usage compared to the Dynamic Arrays .

The choice between an Dynamic Arrays -based queue and a LinkedList-based queue depends on the specific requirements and usage patterns of your application. If you require frequent random access to elements or fast iteration, an Dynamic Arrays -based queue might be more suitable. On the other hand, if you prioritize efficient insertion and removal operations, especially at both ends of the queue, a LinkedList-based queue can be a better choice.

It's important to consider the trade-offs between time complexity, memory usage, and specific performance requirements when deciding which implementation to use for your queue.
