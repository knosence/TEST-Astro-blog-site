---
title: Graphs 
tags: ['Data Structures', 'Foundations of the Digital Architect']
date: 2023-12-18
number: 10
---
# GRAPHS

## OVERVIEW

A graph is a collection of nodes (vertices) connected by edges. It represents relationships between elements and can be either directed (edges have a specific direction) or undirected (edges have no direction). Graphs are used in various programming contexts, including social networks, network routing, web page links, recommendation systems, and solving graph-based problems like shortest path or spanning tree algorithms. Graphs are used when you need to represent and analyze relationships between elements or solve problems that involve connectivity, reachability, or pathfinding.

## PROS OF USING A GRAPH

- Graphs are versatile and can model a wide range of real-world scenarios, such as social networks, transportation networks, or computer networks.
- They can represent complex relationships and dependencies between entities.
- Graphs provide a natural way to represent and solve problems involving connectivity, pathfinding, and network analysis.
- They allow for efficient traversal and exploration of interconnected data.
- Graph algorithms can provide valuable insights and solutions to various problems, such as finding the shortest path, detecting cycles, or identifying connected components.
- Graphs support the representation of both directed and undirected relationships.
- Graphs are well-suited for visual representation, making it easier to understand and analyze complex structures.

## CONS OF USING A GRAPH

- Implementing and manipulating graphs can be more complex compared to other data structures.
- Graphs may require additional memory and computational resources, especially for large-scale graphs.
- Graph operations, such as traversal or pathfinding, can be time-consuming for dense graphs with many vertices and edges.
- Graph algorithms may have different time complexities depending on the specific problem, which can impact performance.
- Maintaining the consistency and integrity of the graph can be challenging, especially when adding or removing vertices and edges.
- Graphs may not be the most efficient data structure for certain types of operations or data access patterns.
- Designing and optimizing graph algorithms can be complex and require expertise in graph theory.

## DIRECTED GRAPH
1. Choose an appropriate data structure for vertices:
    - Decide on a suitable data structure to represent the vertices (nodes) of the graph.
    - Options include an array, linked list, or hash map to store vertex objects.
    - Each vertex should have a unique identifier and any additional data associated with it.
    - Set up the necessary variables and data structures to store and manage the vertices.
    - Additional procedures:
        - Implement a method to find a vertex by its identifier.
        - Implement a method to update the data associated with a vertex.
        - Implement a method to remove vertices that have no outgoing edges.
2. Choose an appropriate data structure for edges:
    - Choose a data structure to represent the edges between vertices.
    - For a directed graph, an adjacency list or an adjacency matrix is commonly used.
    - An adjacency list is usually more efficient for sparse graphs, while an adjacency matrix is suitable for dense graphs.
    - Implement the data structure to store the outgoing edges of each vertex.
    - Each vertex should have a list or array to store its outgoing edges.
    - Additional procedures:
        - Implement a method to find the outgoing edges of a vertex.
        - Implement a method to find the incoming edges of a vertex.
        - Implement a method to update the weight or cost associated with an edge.
3. Create a method to add vertices:
    - Implement a method that allows adding vertices to the graph.
    - Create a vertex object with a unique identifier and any additional data associated with it.
    - Add the vertex object to the vertex data structure, such as an array, linked list, or hash map.
    - Additional procedures:
        - Handle the case when a vertex with the same identifier already exists.
        - Update the necessary data structures to accommodate the new vertex.
4. Create a method to add edges:
    - Implement a method to add directed edges between vertices.
    - Specify the source vertex and the destination vertex for the edge.
    - Find the source vertex in the vertex data structure and add the destination vertex to its list of outgoing edges.
    - Additional procedures:
        - Handle the case when the source or destination vertex is not found.
        - Handle the case when an edge between the given vertices already exists.
        - Update the necessary data structures to reflect the new edge.
5. Create a method to remove vertices:
    - Implement a method to remove vertices from the graph.
    - Remove the vertex object from the vertex data structure.
    - Update the outgoing edge lists of other vertices to remove any references to the removed vertex.
    - Additional procedures:
        - Handle the case when the vertex to remove is not found.
        - Update the necessary data structures to reflect the removal of the vertex and its associated edges.
6. Create a method to remove edges:
    - Implement a method to remove edges between vertices.
    - Specify the source and destination vertices connected by the edge to remove.
    - Find the source vertex in the vertex data structure and remove the destination vertex from its list of outgoing edges.
    - Additional procedures:
        - Handle the case when the source or destination vertex is not found.
        - Handle the case when the specified edge does not exist.
        - Update the necessary data structures to reflect the removal of the edge.
7. Create methods for graph traversal:
    - Implement various graph traversal algorithms to explore the graph, such as depth-first search (DFS) or breadth-first search (BFS).
    - Use appropriate data structures, such as a stack for DFS or a queue for BFS, to track visited vertices and perform the traversal.
    - Implement the necessary helper methods, such as marking vertices as visited or enqueuing/dequeuing vertices.
    - Additional procedures:
        - Implement a method to check if a graph is connected.
        - Implement a method to find all reachable vertices from a given vertex.
        - Implement a method to detect cycles in the graph.
8. Implement additional operations:
    - Consider additional operations based on specific requirements.
    - Implement algorithms for finding paths, detecting cycles, calculating graph metrics (e.g., in-degree, out-degree), or performing topological sorting.
    - Utilize appropriate data structures and algorithms, such as Dijkstra's algorithm for shortest paths or Tarjan's algorithm for cycle detection, for these operations.
    - Additional procedures:
        - Implement a method to find the shortest path between two vertices.
        - Implement a method to compute the minimum spanning tree of the graph.
        - Implement a method to perform topological sorting of the vertices.
9. Handle error conditions and validation:
    - Implement error handling mechanisms to handle invalid operations, such as adding duplicate vertices or edges.
    - Validate inputs to ensure they conform to the graph structure and requirements.
    - Handle edge cases and boundary conditions appropriately.
    - Additional procedures:
        - Implement appropriate error handling for invalid operations.
        - Validate inputs to prevent unexpected behavior or inconsistencies.
        - Handle edge cases, such as an empty graph or a graph with a single vertex.

## UN-DIRECTED GRAPH
1. Choose an appropriate data structure for vertices:
    - Decide on a suitable data structure to represent the vertices (nodes) of the graph.
    - Options include an array, linked list, or hash map to store vertex objects.
    - Each vertex should have a unique identifier and any additional data associated with it.
    - Set up the necessary variables and data structures to store and manage the vertices.
    - Additional procedures:
        - Implement a method to find a vertex by its identifier.
        - Implement a method to update the data associated with a vertex.
        - Implement a method to remove vertices that have no edges.
2. Choose an appropriate data structure for edges:  
        - Choose a data structure to represent the edges between vertices.
    - For an undirected graph, an adjacency list or an adjacency matrix is commonly used.
    - An adjacency list is usually more efficient for sparse graphs, while an adjacency matrix is suitable for dense graphs.
    - Implement the data structure to store the connections between vertices.
    - Each vertex should have a list or array to store its adjacent vertices.
    - Additional procedures:
        - Implement a method to find the adjacent vertices of a vertex.
        - Implement a method to update the weight or cost associated with an edge.
3. Create a method to add vertices:
    - Implement a method that allows adding vertices to the graph.
    - Create a vertex object with a unique identifier and any additional data associated with it.
    - Add the vertex object to the vertex data structure, such as an array, linked list, or hash map.
    - Additional procedures:
        - Handle the case when a vertex with the same identifier already exists.
        - Update the necessary data structures to accommodate the new vertex.
4. Create a method to add edges:
    - Implement a method to add undirected edges between vertices.
    - Specify two vertices to connect with the edge.
    - Find the vertices in the vertex data structure and add each vertex to the other's list of adjacent vertices.
    - Additional procedures:
        - Handle the case when the specified vertices are not found.
        - Handle the case when an edge between the given vertices already exists.
        - Update the necessary data structures to reflect the new edge.
5. Create a method to remove vertices:
    
    - Implement a method to remove vertices from the graph.
    - Remove the vertex object from the vertex data structure.
    - Update the adjacency lists of other vertices to remove any references to the removed vertex.
    - Additional procedures:
        - Handle the case when the vertex to remove is not found.
        - Update the necessary data structures to reflect the removal of the vertex and its associated edges.
6. Create a method to remove edges:
    - Implement a method to remove edges between vertices.
    - Specify two vertices connected by the edge to remove.
    - Find the vertices in the vertex data structure and remove each vertex from the other's list of adjacent vertices.
    - Additional procedures:
        - Handle the case when the specified vertices are not found.
        - Handle the case when the specified edge does not exist.
        - Update the necessary data structures to reflect the removal of the edge.
7. Create methods for graph traversal:
    - Implement various graph traversal algorithms to explore the graph, such as depth-first search (DFS) or breadth-first search (BFS).
    - Use appropriate data structures, such as a stack for DFS or a queue for BFS, to track visited vertices and perform the traversal.
    - Implement the necessary helper methods, such as marking vertices as visited or enqueuing/dequeuing vertices.
    - Additional procedures:
        - Implement a method to check if a graph is connected.
        - Implement a method to find all reachable vertices from a given vertex.
        - Implement a method to detect cycles in the graph.
8. Implement additional operations:
    - Consider additional operations based on specific requirements.
    - Implement algorithms for finding paths, detecting cycles, calculating graph metrics (e.g., degree, connected components), or performing topological sorting.
    - Utilize appropriate data structures and algorithms, such as Dijkstra's algorithm for shortest paths or Tarjan's algorithm for cycle detection, for these operations.
    - Additional procedures:
        - Implement a method to find the shortest path between two vertices.
        - Implement a method to compute the minimum spanning tree of the graph.
        - Implement a method to perform topological sorting of the vertices.
9. Handle error conditions and validation:
    - Implement error handling mechanisms to handle invalid operations, such as adding duplicate vertices or edges.
    - Validate inputs to ensure they conform to the graph structure and requirements.
    - Handle edge cases and boundary conditions appropriately.
    - Additional procedures:
        - Implement appropriate error handling for invalid operations.
        - Validate inputs to prevent unexpected behavior or inconsistencies.
        - Handle edge cases, such as an empty graph or a graph with a single vertex.

## WEIGHTED GRAPH
1. Choose an appropriate data structure for vertices:
    - Decide on a suitable data structure to represent the vertices (nodes) of the graph.
    - Options include an array, linked list, or hash map to store vertex objects.
    - Each vertex should have a unique identifier and any additional data associated with it.
    - Set up the necessary variables and data structures to store and manage the vertices.
    - Additional procedures:
        - Implement a method to find a vertex by its identifier.
        - Implement a method to update the data associated with a vertex.
        - Implement a method to remove vertices that have no edges.
2. Choose an appropriate data structure for edges:
    - Choose a data structure to represent the edges between vertices.
    - For a weighted graph, an adjacency list or an adjacency matrix is commonly used.
    - An adjacency list is usually more efficient for sparse graphs, while an adjacency matrix is suitable for dense graphs.
    - Implement the data structure to store the connections between vertices.
    - Each vertex should have a list or array to store its adjacent vertices along with the corresponding edge weights.
    - Additional procedures:
        - Implement a method to find the adjacent vertices of a vertex.
        - Implement a method to update the weight associated with an edge.
3. Create a method to add vertices:
    - Implement a method that allows adding vertices to the graph.
    - Create a vertex object with a unique identifier and any additional data associated with it.
    - Add the vertex object to the vertex data structure, such as an array, linked list, or hash map.
    - Additional procedures:
        - Handle the case when a vertex with the same identifier already exists.
        - Update the necessary data structures to accommodate the new vertex.
4. Create a method to add edges:
    - Implement a method to add weighted edges between vertices.
    - Specify two vertices to connect with the edge and the weight associated with the edge.
    - Find the vertices in the vertex data structure and add each vertex to the other's list of adjacent vertices with the corresponding weight.
    - Additional procedures:
        - Handle the case when the specified vertices are not found.
        - Handle the case when an edge between the given vertices already exists.
        - Update the necessary data structures to reflect the new edge.
5. Create a method to remove vertices:
    - Implement a method to remove vertices from the graph.
    - Remove the vertex object from the vertex data structure.
    - Update the adjacency lists of other vertices to remove any references to the removed vertex.
    - Additional procedures:
        - Handle the case when the vertex to remove is not found.
        - Update the necessary data structures to reflect the removal of the vertex and its associated edges.
6. Create a method to remove edges:
    - Implement a method to remove edges between vertices.
    - Specify two vertices connected by the edge to remove.
    - Find the vertices in the vertex data structure and remove each vertex from the other's list of adjacent vertices.
    - Additional procedures:
        - Handle the case when the specified vertices are not found.
        - Handle the case when the specified edge does not exist.
        - Update the necessary data structures to reflect the removal of the edge.
7. Create methods for graph traversal:
    - Implement various graph traversal algorithms to explore the graph, such as depth-first search (DFS) or breadth-first search (BFS).
    - Use appropriate data structures, such as a stack for DFS or a queue for BFS, to track visited vertices and perform the traversal.
    - Implement the chosen algorithm based on the desired behavior and requirements.
    - Additional procedures:
        - Implement a method to perform DFS traversal of the graph.
        - Implement a method to perform BFS traversal of the graph.
        - Implement a method to find the shortest path between two vertices using algorithms like Dijkstra's algorithm.
8. Implement additional operations:
    - Consider additional operations based on specific requirements, such as finding the minimum spanning tree or detecting cycles in the graph.
    - Utilize appropriate data structures and algorithms, such as Prim's algorithm or Kruskal's algorithm for minimum spanning tree, or Tarjan's algorithm for cycle detection.
    - Implement the chosen algorithms to perform the desired operations.
    - Additional procedures:
        - Implement a method to compute the minimum spanning tree of the graph.
        - Implement a method to detect cycles in the graph.
9. Handle error conditions and validation:
    - Implement error handling mechanisms to handle invalid operations, such as adding duplicate vertices or edges.
    - Validate inputs to ensure they conform to the graph structure and requirements.
    - Handle edge cases and boundary conditions appropriately.
    - Additional procedures:
        - Implement appropriate error handling for invalid operations.
        - Validate inputs to prevent unexpected behavior or inconsistencies.
        - Handle edge cases, such as an empty graph or a graph with a single vertex.

## UN-WEIGHTED GRAPH
1. Choose an appropriate data structure for vertices:
    - Decide on a suitable data structure to represent the vertices (nodes) of the graph.
    - Options include an array, linked list, or hash map to store vertex objects.
    - Each vertex should have a unique identifier and any additional data associated with it.
    - Set up the necessary variables and data structures to store and manage the vertices.
    - Additional procedures:
        - Implement a method to find a vertex by its identifier.
        - Implement a method to update the data associated with a vertex.
        - Implement a method to remove vertices that have no edges.
2. Choose an appropriate data structure for edges:
    - Choose a data structure to represent the edges between vertices.
    - For an unweighted graph, an adjacency list or an adjacency matrix is commonly used.
    - An adjacency list is usually more efficient for sparse graphs, while an adjacency matrix is suitable for dense graphs.
    - Implement the data structure to store the connections between vertices.
    - Each vertex should have a list or array to store its adjacent vertices.
    - Additional procedures:
        - Implement a method to find the adjacent vertices of a vertex.
3. Create a method to add vertices:
    - Implement a method that allows adding vertices to the graph.
    - Create a vertex object with a unique identifier and any additional data associated with it.
    - Add the vertex object to the vertex data structure, such as an array, linked list, or hash map.
    - Additional procedures:
        - Handle the case when a vertex with the same identifier already exists.
        - Update the necessary data structures to accommodate the new vertex.
4. Create a method to add edges:
    - Implement a method to add unweighted edges between vertices.
    - Specify two vertices to connect with the edge.
    - Find the vertices in the vertex data structure and add each vertex to the other's list of adjacent vertices.
    - Additional procedures:
        - Handle the case when the specified vertices are not found.
        - Handle the case when an edge between the given vertices already exists.
        - Update the necessary data structures to reflect the new edge.
5. Create a method to remove vertices:
    - Implement a method to remove vertices from the graph.
    - Remove the vertex object from the vertex data structure.
    - Update the adjacency lists of other vertices to remove any references to the removed vertex.
    - Additional procedures:
        - Handle the case when the vertex to remove is not found.
        - Update the necessary data structures to reflect the removal of the vertex and its associated edges.
6. Create a method to remove edges:
    - Implement a method to remove edges between vertices.
    - Specify two vertices connected by the edge to remove.
    - Find the vertices in the vertex data structure and remove each vertex from the other's list of adjacent vertices.
    - Additional procedures:
        - Handle the case when the specified vertices are not found.
        - Handle the case when the specified edge does not exist.
        - Update the necessary data structures to reflect the removal of the edge.
7. Create methods for graph traversal:
    - Implement various graph traversal algorithms to explore the graph, such as depth-first search (DFS) or breadth-first search (BFS).
    - Use appropriate data structures, such as a stack for DFS or a queue for BFS, to track visited vertices and perform the traversal.
    - Implement the chosen algorithm based on the desired behavior and requirements.
    - Additional procedures:
        - Implement a method to perform DFS traversal of the graph.
        - Implement a method to perform BFS traversal of the graph.
8. Implement additional operations:
    - Consider additional operations based on specific requirements, such as finding connected components, detecting cycles, or computing shortest paths.
    - Utilize appropriate data structures and algorithms, such as depth-first search (DFS) for connected components or cycle detection, or Dijkstra's algorithm for shortest paths.
    - Implement the chosen algorithms to perform the desired operations.
    - Additional procedures:
        - Implement a method to find connected components in the graph.
        - Implement a method to detect cycles in the graph.
        - Implement a method to find the shortest path between two vertices.
9. Handle error conditions and validation:
    - Implement error handling mechanisms to handle invalid operations, such as adding duplicate vertices or edges.
    - Validate inputs to ensure they conform to the graph structure and requirements.
    - Handle edge cases and boundary conditions appropriately.
    - Additional procedures:
        - Implement appropriate error handling for invalid operations.
        - Validate inputs to prevent unexpected behavior or inconsistencies.
        - Handle edge cases, such as an empty graph or a graph with a single vertex.

## Directed vs Undirected vs Weighted vs Unweighted Graphs

|                    | *Directed Graph* | *Undirected Graph* | *Weighted Graph*             | *Unweighted Graph* |
| ------------------ | ---------------- | ------------------ | ---------------------------- | ------------------ |
| **Edge**           | Directed         | Undirected         | Directed                     | Undirected         |
| **Connections**    | One-way          | Two-way            | One-way                      | Two-way            |
| **Path**           | Directed path    | Undirected path    | Directed path                | Undirected path    |
| **Weight**         | Not applicable   | Not applicable     | Assigned                     | Not applicable     |
| **Example**        | Internet         | Social network     | Road network                 | Family tree        |
| **Cycle**          | Directed cycle   | Undirected cycle   | Directed cycle               | Undirected cycle   |
| **Represented by** | Directed arrows  | Undirected lines   | Directed arrows with weights | Undirected lines   |


