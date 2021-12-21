export default function sumPairs(numbers, result) {
  let note = null
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        return note = [numbers[i], numbers[j]]
      }
    }
  }
  return note
}