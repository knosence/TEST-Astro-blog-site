---
title: Trees
tags: ['Data Structures', 'Foundations of the Digital Architect']
date: 2023-12-18

---
# TREES

## OVERVIEW

A tree is a hierarchical data structure composed of nodes. Each node can have child nodes, forming a branching structure. Trees are used to represent hierarchical relationships and organize data in a hierarchical manner. Trees are used in various programming contexts, including file systems, organization hierarchies, family trees, decision trees, and data indexing structures like binary search trees. Trees are used when you need to represent and manage hierarchical relationships or when you require efficient searching, insertion, deletion, or traversal operations on structured data.

## PROS OF USING A TREE

- Efficient Search: Trees provide efficient search operations, especially for balanced trees like binary search trees (BST). The search time complexity is O(log n) in balanced trees, making them suitable for scenarios where fast searching is required.
- Ordered Structure: Trees can maintain elements in a sorted order, which makes them useful for operations like range queries or finding the minimum/maximum element efficiently.
- Insertion and Deletion: Trees offer efficient insertion and deletion operations, especially when maintaining the tree's balance. Balanced trees ensure that these operations have a time complexity of O(log n).
- Hierarchical Structure: Trees naturally represent hierarchical relationships between elements. This makes them suitable for modeling hierarchical data, such as file systems or organizational structures.

## CONS OF USING A TREE

- Space Overhead: Trees require additional memory to store the node structure, which can lead to increased space consumption compared to simpler data structures like arrays or linked lists.
- Complexity and Implementation: Implementing and maintaining balanced trees can be more complex compared to other data structures. Ensuring the tree's balance and handling various edge cases require careful consideration.
- Limited Ordering: While trees provide efficient ordering for search operations, they might not support other ordering requirements, such as finding the kth smallest element or arbitrary ordering based on multiple attributes.

## HOW TO IMPLEMENT A TREE

1. Define the Node:
    - Define a data structure to represent a single node in the tree. Each node should have a value and references to its child nodes.
2. Create the Tree:
    - Create a container to hold the nodes and define methods to perform operations on the tree.
3. Insertion:
    - Implement a procedure to insert a new node into the tree.
    - Start from the root node.
    - Compare the value of the new node with the current node.
        - If the value is smaller, move to the left child node. 
        - If it is larger, move to the right child node.
    - Repeat this process until reaching a null reference, indicating an available position for the new node.
    - Create a new node at that position and set its value.
4. Deletion:
    - Implement a procedure to delete a specific node from the tree.
    - Start from the root node and traverse the tree to find the node to be deleted.
    - Handle different cases based on the number of child nodes the target node has:
        - If the node has no children, simply remove it from the tree.
        - If the node has one child, replace it with its child node.
        - If the node has two children, find the minimum (or maximum) value in its right (or left) subtree and replace the node with that value. Then delete the duplicate node in the subtree.
5. Search:
    - Implement a procedure to search for a specific value in the tree.
    - Start from the root node and compare the target value with the value of the current node.
    - If the values match, return the node.
    - If the target value is smaller, move to the left child node. If it is larger, move to the right child node.
    - Repeat this process until finding a matching value or reaching a null reference, indicating that the value is not present in the tree.
6. Traversal:
    - Implement procedures for various traversal methods to visit all the nodes in the tree in a specific order:
        - Pre-order traversal: Visit the current node, then recursively traverse the left subtree, and finally recursively traverse the right subtree.
        - In-order traversal: Recursively traverse the left subtree, visit the current node, and then recursively traverse the right subtree.
        - Post-order traversal: Recursively traverse the left subtree, recursively traverse the right subtree, and finally visit the current node.
        - Level-order traversal: Visit the nodes level by level, starting from the root node and moving to the next level.
7. Additional Operations:
    - Depending on the specific requirements and use cases, implement additional operations such as: 
        - Finding the height of the tree 
        - Checking if the tree is balanced
        - Finding the minimum or maximum value in the tree 
        - Determining if the tree is a binary search tree.
