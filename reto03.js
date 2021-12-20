export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  if (
    letter.includes('()') ||
    letter.includes('[') ||
    letter.includes('{')
  ) return false
  if (letter.match(/\(([^)]+)\)/)) return true
  return false
}
