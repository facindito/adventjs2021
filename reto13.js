function wrapGifts(gifts) {
  let gift = []
  let maxLength

  for (let i = 0; i < gifts.length; i++) {
    gift.push(`*${gifts[i]}*`)
    maxLength = Math.max(gifts[i].length) + 2
  }
  gift.unshift('*'.repeat(maxLength))
  gift.push('*'.repeat(maxLength))

  return (!gifts.length)
    ? []
    : gift
}
