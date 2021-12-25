export default function countDecorations(bigTree) {
  let sum = bigTree.value
  if (bigTree.left) sum += countDecorations(bigTree.left)
  if (bigTree.right) sum += countDecorations(bigTree.right)
  return sum
}
