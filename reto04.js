export default function createXmasTree(height) {
  let arbol = []
  let hojas = '*'
  let _ = '_'

  for (let i = 0; i < height; i++) {
    arbol[i] =
      _.repeat(height - i - 1) +
      hojas.repeat(2 * i + 1) +
      _.repeat(height - i - 1)
  }

  arbol[height] = _.repeat(height - 1) + '#' + _.repeat(height - 1)
  arbol[height + 1] = _.repeat(height - 1) + '#' + _.repeat(height - 1)

  return arbol.toString().split(',').join('\n')
}