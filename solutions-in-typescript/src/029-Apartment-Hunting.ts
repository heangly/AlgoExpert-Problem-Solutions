interface Block {
  [key: string]: boolean
}

// Time: O(br) | Space: O(br)
export function apartmentHunting(blocks: Block[], reqs: string[]) {
  let output = {
    index: Infinity,
    point: Infinity
  }

  const table: Record<string, number[]> = {}
  for (const req of reqs) {
    table[req] = []
  }

  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      if (blocks[i][req]) {
        table[req].push(i)
      }
    }
  }

  for (let i = 0; i < blocks.length; i++) {
    let maxPoint = 0
    for (const req of reqs) {
      let smallestDistanceToWalk = Infinity
      for (const index of table[req]) {
        if (i === index) {
          smallestDistanceToWalk = 0
          break
        }
        const distanceToWalk = Math.abs(index - i)
        smallestDistanceToWalk = Math.min(smallestDistanceToWalk, distanceToWalk)
      }
      maxPoint = Math.max(maxPoint, smallestDistanceToWalk)
    }

    if (output.point > maxPoint) {
      output.index = i
      output.point = maxPoint
    }
  }

  return output.index
}

console.log(
  apartmentHunting(
    [
      {
        gym: false,
        school: true,
        store: false
      },
      {
        gym: true,
        school: false,
        store: false
      },
      {
        gym: true,
        school: true,
        store: false
      },
      {
        gym: false,
        school: true,
        store: false
      },
      {
        gym: false,
        school: true,
        store: true
      }
    ],
    ['gym', 'school', 'store']
  )
)
