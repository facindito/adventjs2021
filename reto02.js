function listGifts(letter) {
  // ¡Tú puedes!
  let gifts = {}
  let filterGifts = letter.split(' ')
    .filter(gift => !gift.includes('_'))
    .filter(gift => gift !== '')
  for (let i = 0; i < filterGifts.length; i++) {
    gifts[filterGifts[i]]
      ? gifts[filterGifts[i]] += 1
      : gifts[filterGifts[i]] = 1
  }
  return gifts
}