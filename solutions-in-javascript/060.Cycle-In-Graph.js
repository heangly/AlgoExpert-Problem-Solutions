const cycleInGraph = (edges) => {
  const numNodes = edges.length
  const visited = new Array(numNodes).fill(false)
  const inStack = new Array(numNodes).fill(false)

  for (let i = 0; i < numNodes; i++) {
    if (visited[i]) continue
    const containsCycle = isNodeInCycle(i, edges, visited, inStack)
    if (containsCycle) return true
  }
  return false
}

const isNodeInCycle = (node, edges, visited, inStack) => {
  visited[node] = true
  inStack[node] = true

  const neighbors = edges[node]
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      const containsCycle = isNodeInCycle(neighbor, edges, visited, inStack)
      if (containsCycle) return true
    } else if (inStack[neighbor]) {
      return true
    }
  }
  inStack[node] = false
  return false
}

const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []]
console.log(cycleInGraph(edges))
