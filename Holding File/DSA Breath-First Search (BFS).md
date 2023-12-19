# BREADTH-FIRST SEARCH (BFS)
## OVERVIEW

Breadth-First Search (BFS) is a graph traversal algorithm that explores a graph or tree structure by systematically exploring all neighbors at the current depth level before moving to the next depth level. It visits nodes in a breadthward motion. BFS can be implemented by programmers or software developers to traverse and analyze graph or tree structures. BFS can be applied to any graph or tree data structure where the relationships between nodes are represented by edges or links. BFS is commonly used when there is a need to explore all the vertices or nodes in a graph or tree structure in a level-by-level manner. It is useful for tasks such as finding the shortest path, solving puzzles, or determining the minimum number of steps required to reach a goal.

## PROS OF USING BREATH-FIRST SEARCH (BFS)
- Shortest Path: BFS guarantees that the shortest path (in terms of edges) between the starting vertex and any other reachable vertex will be found. It is widely used for finding the shortest path in unweighted graphs.
- Connectivity: BFS explores all vertices that are reachable from the starting vertex, making it useful for determining the connectivity of a graph or finding connected components.
- Spanning Trees: BFS can be used to construct a breadth-first spanning tree of a graph, which is a subgraph that contains all vertices and a subset of edges.

## CONS OF USING BREATH-FIRST SEARCH (BFS)
- Memory Usage: BFS uses a queue to track and visit nodes, which may require more memory compared to other traversal algorithms like Depth-First Search (DFS).
- Performance in Dense Graphs: In dense graphs with many edges, BFS may take longer to complete due to the need to explore all neighbors at each depth level.
- Lack of Optimality in Weighted Graphs: BFS does not necessarily find the optimal path in weighted graphs, as it prioritizes exploring all neighbors at the current depth level rather than considering edge weights.

## HOW TO IMPLEMENT BREATH-FIRST SEARCH (BFS)

To implement Breadth-First Search:

1. Create a data structure to track visited nodes:
   - Initialize a boolean array or set to keep track of visited nodes.

2. Start at a specific source vertex:
   - Mark the source vertex as visited.
   - Enqueue the source vertex into the queue.

3. Traverse the graph in a breadthward manner:
   - While the queue is not empty:
     - Dequeue a vertex from the queue.
     - Process or perform any necessary operations on the dequeued vertex.

4. Visit all unvisited neighbors of the dequeued vertex:
   - For each neighbor of the dequeued vertex:
     - If the neighbor has not been visited:
       - Mark the neighbor as visited.
       - Enqueue the neighbor into the queue.

5. Repeat steps 3-4 until the queue is empty.
   - At this point, all reachable vertices will have been visited.

By following these steps, BFS explores a graph or tree by visiting the current vertex, marking it as visited, and enqueueing its unvisited neighbors. It continues this process until all vertices have been visited or until the desired condition or goal is met. The time complexity of BFS is O(V + E), where V is the number of vertices and E is the number of edges in the graph.
