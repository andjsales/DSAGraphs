class Node {
  constructor (value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor () {
    this.nodes = new Set();
  }

  // Add a single node to the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // Add an array of nodes to the graph
  addVertices(vertexArray) {
    for (const vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // Add an edge between two nodes
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // Remove an edge between two nodes
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // Remove a node and its edges from the graph
  removeVertex(vertex) {
    for (const adjacent of vertex.adjacent) {
      adjacent.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
  }

  // DFS implementation
  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const stack = [start];

    while (stack.length) {
      const node = stack.pop();

      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);

        for (const neighbor of node.adjacent) {
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  // BFS implementation
  breadthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const queue = [start];

    while (queue.length) {
      const node = queue.shift();

      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);

        for (const neighbor of node.adjacent) {
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

module.exports = { Graph, Node };
