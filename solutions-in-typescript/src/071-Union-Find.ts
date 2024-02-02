// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
export class UnionFind {
  parent: Record<number, number> = {}
  rank: Record<number, number> = {}

  constructor() {
    // Write your code here.
  }

  createSet(value: number) {
    // Write your code here.
    this.parent[value] = value
    this.rank[value] = 0
  }

  find(value: number) {
    if (!(value in this.parent)) return null
    if (value !== this.parent[value]) {
      this.parent[value] = this.find(this.parent[value])!
    }
    return this.parent[value]
  }

  union(valueOne: number, valueTwo: number) {
    if (!(valueOne in this.parent) || !(valueTwo in this.parent)) return
    const valueOneRoot = this.find(valueOne)!
    const valueTwoRoot = this.find(valueTwo)!
    if (this.rank[valueOneRoot] < this.rank[valueTwoRoot]) {
      this.parent[valueOneRoot] = valueTwoRoot
    } else if (this.rank[valueOneRoot] > this.rank[valueTwoRoot]) {
      this.parent[valueTwoRoot] = valueOneRoot
    } else {
      this.parent[valueTwoRoot] = valueOneRoot
      this.rank[valueOneRoot]++
    }
  }
}
