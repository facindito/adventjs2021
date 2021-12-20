export default function pangram(letter) {
  let total = 0
  let allLetters = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ä', 'ë', 'ï', 'ö', 'ü', 'á', 'é', 'í', 'ó', 'ú']
  letter = letter.toLowerCase()
  for (let i = 0; i < allLetters.length; i++) {
    if (letter.includes(allLetters[i])) total += 1
  }
  return (total >= 27) ? true : false
}