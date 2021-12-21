export default function getMinJump(obstacles) {
  let jump = 1
  let minJump = 1
  for (jump; jump <= 10; jump++) {
    while (!obstacles.includes(jump * minJump)) {
      if (jump * minJump > 10) return jump
      minJump++
    }
  }
}