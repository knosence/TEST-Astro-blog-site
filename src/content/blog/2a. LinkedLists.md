---
title: LinkedLists
tags: ['Data Structures', 'Foundations of the Digital Architect']
date: 2023-12-18
---
# LINKEDLISTS

## OVERVIEW

A LinkedList is a linear data structure that consists of a sequence of elements called nodes. Each node contains the data and a reference to the next node in the sequence. LinkedLists are used in various applications and scenarios, such as implementing dynamic data structures, managing data that changes frequently, and representing sequences of elements. LinkedLists are suitable when the order of elements matters and when frequent insertions and deletions at any position within the list are expected. They are particularly useful when the size of the list needs to change dynamically.

## PROS OF USING A LINKEDLIST

- Dynamic Size: LinkedLists can grow or shrink dynamically as elements are added or removed, making them suitable for scenarios where the size is unpredictable or needs to change frequently.
- Efficient Insertions and Deletions: Inserting or deleting elements at any position in a LinkedList is efficient, usually taking constant time, as it involves updating the references of adjacent nodes.
- Memory Efficiency: LinkedLists can be memory-efficient since they allocate memory for each node only as needed.
- Easy Insertion at the Front: Adding an element at the front of the LinkedList is a constant time operation, as it involves updating the head reference.

## CONS OF USING A LINKEDLIST

- Limited Random Access: Accessing elements in a LinkedList by index requires traversing the list from the head node, which can be inefficient compared to direct access provided by arrays or other data structures.
- Inefficient Search: Searching for an element in a LinkedList requires traversing the list until the desired element is found, which can result in a linear time complexity.
- Additional Memory Overhead: LinkedLists require extra memory to store references (links) between nodes, which can be a disadvantage when memory usage is a concern.
- Lack of Cache Friendliness: LinkedLists are not cache-friendly due to their scattered memory locations, which can result in slower performance compared to arrays or contiguous data structures.

## HOW TO IMPLEMENT A LINKEDLIST
1. Define the Node Class:
    - Create a class called "Node" to represent a single node in the LinkedList.
    - Each node should have two properties: data (the element to be stored) and a reference to the next node.
2. Define the LinkedList Class:
    - Create a class called "LinkedList" to manage the collection of nodes.
    - The LinkedList class should have a reference to the head node (the first node in the list) and any other necessary properties, such as the size of the list.
3. Implement the Add Operation:
	- To add an element to the LinkedList, create a new Node instance with the given data.
	- If the LinkedList is empty (head node is null), set the new node as the head node.
	- Otherwise, traverse the LinkedList from the head node to the last node (node whose next reference is null).
	- Once you reach the last node, set its next reference to the new node.
	- Update the size of the LinkedList.
4. Implement the Get Operation:
	- To retrieve an element from the LinkedList, start from the head node.
	- Traverse the LinkedList until you reach the desired index or the end of the list.
	- If the index is valid, return the data of the node at that index.
	- If the index is out of bounds, throw an exception or return a special value to indicate an error.
5. Implement the Remove Operation:
	- To remove an element from the LinkedList, start from the head node.
	- Traverse the LinkedList until you reach the node just before the node to be removed.
	- Update the next reference of the previous node to skip over the node to be removed.
	- Update the size of the LinkedList.
	- If the removed node was the head node, update the head reference accordingly.
6. Implement the Insert Operation:
	- To insert an element at a specific index in the LinkedList, start from the head node.
	- Traverse the LinkedList until you reach the node just before the desired index.
	- Create a new Node instance with the given data.
	- Set the next reference of the new node to the node at the desired index.
	- Update the next reference of the previous node to point to the new node.
	- Update the size of the LinkedList.
7. Implement the Size Operation:
	- To determine the size of the LinkedList, return the stored size value maintained by the LinkedList class.
	- Alternatively, you can traverse the LinkedList and count the number of nodes.
8. Implement the Contains Operation:
	- To check if an element exists in the LinkedList, start from the head node.
	- Traverse the LinkedList until you find a node with the desired data.
	- If a node with the desired data is found, return true; otherwise, return false.

> [!REMEMBER]  
> Consider edge cases, such as an empty LinkedList or invalid indices, and handle them appropriately. Also, you can add additional methods or features to the LinkedList class based on your specific requirements.
