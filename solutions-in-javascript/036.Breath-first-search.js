class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    const q = [this];
    let current;
    while (q.length) {
      current = q.shift();
      array.push(current.name);
      for (const child of current.children) {
        q.push(child);
      }
    }
    return array;
  }
}
