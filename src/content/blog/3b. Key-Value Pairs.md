---
title: Key-Value Pairs 
tags: ['Data Structures', 'Foundations of the Digital Architect']
date: 2023-12-18
---
# DSA - key-value pairsS

## OVERVIEW

A key-value pairs (or dictionary) is a data structure that stores key-value pairs. It allows efficient insertion, retrieval, and deletion of elements based on their keys. key-value pairs are used in various programming contexts where fast access to values based on keys is required. They are commonly used for caching, indexing, data retrieval, and implementing associative arrays. key-value pairs are used when you need to associate values with unique keys and perform frequent operations like adding, retrieving, or removing elements based on their keys.

## PROS OF USING A key-value pairs

- Unique Elements: Sets enforce uniqueness, meaning each element can only occur once in a set. This property can be useful when you need to ensure distinct elements in your collection.
- Efficient Element Lookup: Sets provide efficient element lookup. It allows you to quickly check if an element is present in the set, which is especially useful for large collections of data.
- Set Operations: Sets offer convenient operations like union, intersection, and difference, which can help with tasks like combining or comparing multiple sets.
- Mathematical Abstraction: Sets provide a mathematical abstraction of a collection of elements, making them suitable for modeling real-world concepts and solving problems using set theory.

## CONS OF USING A key-value pairs

- No Indexing: Sets do not provide index-based access to elements. If you need to access elements by index or maintain element order, a set may not be the most suitable choice.
- No Duplicate Elements: While the uniqueness property is a benefit in many scenarios, it can also be a limitation if you need to store multiple occurrences of the same element.
- Lack of Ordered Iteration: Sets do not guarantee a specific order for iteration. If you require a specific ordering of elements, a set may not provide the desired behavior.
- Additional Overhead: Sets may have additional memory overhead due to internal data structures used to enforce uniqueness and perform efficient element lookup.

## HOW TO IMPLEMENT A key-value pairs
1. Define the key-value pairs Data Structure:
    - Determine the underlying data structures to represent the key-value pairs. Generally, a key-value pairs consists of an array (bucket array) of linked lists (buckets), where each bucket stores key-value pairs.
2. Initialize the key-value pairs:
    - Create an array (bucket array) of a suitable size to store the buckets. The size should be chosen based on the expected number of elements and desired load factor.
    - Initialize each bucket as an empty linked list.
3. Generate Hash Code:
    - Define a hash function that generates a unique hash code for each key. The hash code should distribute keys evenly across the bucket array to minimize collisions.
    - The hash function can be implemented by applying a suitable algorithm (such as the division method, multiplication method, or custom algorithms) to transform the key into an integer hash code.
4. Map Key to Bucket:
    - Use the hash code generated from the key to map the key to the corresponding bucket in the bucket array.
    - This can be done by performing a modulo operation on the hash code using the size of the bucket array.
5. Handle Collisions:
    - In the case of collisions, where multiple keys map to the same bucket, handle them using a suitable collision resolution strategy.
    - One common strategy is to use separate chaining, where each bucket contains a linked list to store multiple key-value pairs with the same hash code.
6. Add Key-Value Pair:
    - To add a key-value pair to the key-value pairs, perform the following steps:
        - Generate the hash code for the key.
        - Map the key to the corresponding bucket in the bucket array.
        - Check if the key already exists in the bucket. If it does, update the corresponding value.
        - If the key does not exist, create a new key-value pair and add it to the bucket.
7. Retrieve Value by Key:
    - To retrieve the value associated with a given key, perform the following steps:
        - Generate the hash code for the key.
        - Map the key to the corresponding bucket in the bucket array.
        - Iterate through the linked list in the bucket to find the key-value pair with the matching key.
        - If the key is found, return the corresponding value; otherwise, return null or handle the absence of the key appropriately.
8. Remove Key-Value Pair:
    - To remove a key-value pair from the key-value pairs, perform the following steps:
        - Generate the hash code for the key.
        - Map the key to the corresponding bucket in the bucket array.
        - Iterate through the linked list in the bucket to find the key-value pair with the matching key.
        - If the key is found, remove the corresponding key-value pair from the linked list.
9. Resize the key-value pairs:
    - Implement a mechanism to resize the key-value pairs dynamically when the load factor (ratio of the number of elements to the capacity) exceeds a threshold.
    - Resizing involves creating a new bucket array with a larger size, rehashing all the existing key-value pairs, and redistributing them to the new buckets.
10. Handle Additional Operations:
    - Depending on the specific requirements and use cases, additional operations such as iterating through the key-value pairs, checking if a key exists, getting the size, or clearing the key-value pairs may be required. Implement these operations as needed.

