interface Block {
  [key: string]: boolean
}

const apartmentHunting = (blocks: Block[], reqs: string[]) => {
  const maxDistanceAtBlocks = new Array(blocks.length).fill(-Infinity)

  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      let closestReqDistance = Infinity
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReqDistance = Math.min(
            closestReqDistance,
            distanceBetween(i, j)
          )
        }
      }
      maxDistanceAtBlocks[i] = Math.max(
        maxDistanceAtBlocks[i],
        closestReqDistance
      )
    }
  }
  return getIndxAtMinValue(maxDistanceAtBlocks)
}

const getIndxAtMinValue = (array: number[]) => {
  let idxAtMinValue = 0
  let minValue = Infinity
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i]
    if (currentValue < minValue) {
      minValue = currentValue
      idxAtMinValue = i
    }
  }

  return idxAtMinValue
}

const distanceBetween = (a: number, b: number) => {
  return Math.abs(a - b)
}

const blocks = [
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
]
const reqs = ['gym', 'school', 'store']
console.log(apartmentHunting(blocks, reqs))
export {}
