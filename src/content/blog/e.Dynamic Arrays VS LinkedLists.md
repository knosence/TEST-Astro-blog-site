---
title: Dynamic Arrays VS. LinkedList
tags: ['Data Structures', 'Foundations of the Digital Architect']
date: 2023-12-18
---
# Dynamic Arrays VS. LinkedList

|        | *Dynamic Arrays*                          | *LinkedList*                         |
|--------|------------------------------------|------------------------------------|
| **Storage Mechanism** | Contiguous block of memory | Nodes connected by pointers       |
| **Random Access** | Efficient                        | Inefficient                       |
| **Insertion/Deletion (at beginning)** | Inefficient                        | Efficient                         |
| **Insertion/Deletion (in middle/end)** | Inefficient                        | Efficient                         |
| **Memory Overhead** | Low                                | High                               |
| **Iteration** | Efficient                        | Efficient                         |
| **Implementation** | Backed by an array                | Doubly linked list                 |
| **Use Case** | Random access, frequent modifications | Frequent insertions/deletions      |
| **Time Complexity (Big O)** |                                    |                                    |
| **- Access**   | O(1)                               | O(n) (worst case)                  |
| **- Insertion/Deletion (at beginning)** | O(n)                        | O(1)                               |
| **- Insertion/Deletion (in middle/end)** | O(n)                    | O(1)                               |
| **- Search**   | O(n)                               | O(n)                               |
