const topologicalSort = (jobs, deps) => {
  const obj = {}
  for (const [first, second] of deps) {
    if (first in obj) {
      obj[first].push(second)
    } else {
      obj[first] = [second]
    }
  }

  const arr = []
  Object.values(obj).forEach((val) => arr.push(...val))
  const childrens = [...new Set(arr)]

  return obj
}

const jobs = [1, 2, 3, 4]
const deps = [
  [1, 2],
  [1, 3],
  [3, 2],
  [4, 2],
  [4, 3]
]
console.log(topologicalSort(jobs, deps))
