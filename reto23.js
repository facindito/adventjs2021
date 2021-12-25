export default function canReconfigure(from, to) {
  let letters = {}
  if (from.length !== to.length) return false
  for (let i = 0; i < from.length; i++) {
    if (letters[from[i]] && letters[from[i]] !== to[i]) return false
    if (letters[to[i]] && letters[to[i]] !== from[i]) return false
    letters[from[i]] = to[i]
    letters[to[i]] = from[i]
  }
  return true
}