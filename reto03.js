export default function isValid(letter) {
  if (
    letter.includes('()') ||
    letter.includes('[') ||
    letter.includes('{')
  ) return false
  if (letter.match(/\(([^)]+)\)/)) return true
  return false
}
