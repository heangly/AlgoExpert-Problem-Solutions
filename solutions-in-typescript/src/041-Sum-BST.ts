// This is an input class. Do not edit.
export class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

interface TreeInfo {
  isBst: boolean
  maxValue: number
  minValue: number
  bstSum: number
  bstSize: number
  totalSumBstNodes: number
}

// Time: O(n)  where n is the number of nodes in the tree
// Space: O(h) where h is the height of the tree
export function sumBsts(tree: BinaryTree) {
  return getTreeInfo(tree).totalSumBstNodes
}

const getTreeInfo = (tree: BinaryTree | null): TreeInfo => {
  if (!tree) {
    return {
      isBst: true,
      maxValue: -Infinity,
      minValue: Infinity,
      bstSum: 0,
      bstSize: 0,
      totalSumBstNodes: 0
    }
  }

  const leftTreeInfo = getTreeInfo(tree.left)
  const rightTreeInfo = getTreeInfo(tree.right)

  const satisfiesBstProps = tree.value > leftTreeInfo.maxValue && tree.value <= rightTreeInfo.minValue
  const isBst = satisfiesBstProps && leftTreeInfo.isBst && rightTreeInfo.isBst

  const maxValue = Math.max(tree.value, Math.max(leftTreeInfo.maxValue, rightTreeInfo.maxValue))
  const minValue = Math.min(tree.value, Math.min(leftTreeInfo.minValue, rightTreeInfo.minValue))

  let bstSum = 0
  let bstSize = 0

  let totalSumBstNodes = leftTreeInfo.totalSumBstNodes + rightTreeInfo.totalSumBstNodes

  if (isBst) {
    bstSum = tree.value + leftTreeInfo.bstSum + rightTreeInfo.bstSum
    bstSize = 1 + leftTreeInfo.bstSize + rightTreeInfo.bstSize

    if (bstSize >= 3) {
      totalSumBstNodes = bstSum
    }
  }

  return {
    isBst,
    maxValue,
    minValue,
    bstSum,
    bstSize,
    totalSumBstNodes
  }
}
