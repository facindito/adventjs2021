export default function canMouseEat(direction, game) {
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === 'm') {
        if (direction === 'up') return (game[i - 1] && game[i - 1][j] === '*') ?? false
        if (direction === 'down') return (game[i + 1] && game[i + 1][j] === '*') ?? false
        if (direction === 'right') return (game[i][j + 1] === '*') ?? false
        if (direction === 'left') return (game[i][j - 1] === '*') ?? false
      }
    }
  }
  return false
}