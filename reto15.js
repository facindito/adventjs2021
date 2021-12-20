export default function checkSledJump(heights) {
  let lastIndex = 0
  for (let i = 0; i + 1 < heights.length; i++) {
    if (heights[i] === heights[i + 1]) return false
    if (heights[i] < heights[i + 1]) lastIndex += 1
    if (heights[i] > heights[i + 1]) lastIndex -= 1
  }
  return (lastIndex <= 0)
    ? true
    : false
}