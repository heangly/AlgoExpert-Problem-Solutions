export function minNumberOfJumps(array: number[]) {
  let minJump = Infinity

  const helper = (index: number, jumpSoFar: number) => {
    if (index >= array.length - 1) {
      minJump = Math.min(minJump, jumpSoFar)
      return
    }

    for (let i = 1; i <= array[index]; i++) {
      helper(index + i, jumpSoFar + 1)
    }
  }

  helper(0, 0)
  return minJump
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))
