export default function decodeNumbers(symbols) {
  // ¡No olvides compartir tu solución en redes!
  let total = 0
  let previous = 0
  const sybolValor = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }
  symbols.split('').reverse().forEach(symbol => {
    (previous <= sybolValor[symbol])
      ? total += sybolValor[symbol]
      : total -= sybolValor[symbol]
    previous = sybolValor[symbol]
  })
  return total
}