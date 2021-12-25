export default function checkIsSameTree(treeA, treeB) {
  let countDecorations = (bigTree) => {
    let sum = bigTree.value
    if (bigTree.left) sum += countDecorations(bigTree.left)
    if (bigTree.right) sum += countDecorations(bigTree.right)
    return sum
  }
  let valueA = countDecorations(treeA)
  let valueB = countDecorations(treeB)
  return valueA === valueB
}