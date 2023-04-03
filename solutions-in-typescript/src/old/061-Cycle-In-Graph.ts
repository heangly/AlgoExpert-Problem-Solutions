// Time: O(v + e) | Space: O(v + e)
const cycleInGraph = (edges: number[][]) => {
  const graphs: number[] = []
  const table: { [key: string]: number[] } = {}
  const completed = new Set()
  const inProgress = new Set()

  const containCycle = (job: number): boolean => {
    if (completed.has(job)) return false
    if (inProgress.has(job)) return true

    inProgress.add(job)

    if (job in table) {
      for (const prereq of table[job]) {
        if (!completed.has(prereq) && containCycle(prereq)) return true
      }
    }

    inProgress.delete(job)
    completed.add(job)
    return false
  }

  for (let i = 0; i < edges.length; i++) {
    graphs.push(i)
    for (const job of edges[i]) {
      if (job in table) {
        table[job].push(i)
      } else {
        table[job] = [i]
      }
    }
  }

  for (const graph of graphs) {
    if (completed.has(graph)) continue
    if (containCycle(graph)) return true
  }

  return false
}

const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []]
console.log(cycleInGraph(edges))
