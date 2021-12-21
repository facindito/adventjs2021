export default function canCarry(capacity, trip) {
  let sum = 0
  for (let i = 0; i < trip.length - 1; i++) {

    const [numGift, pickup, delivery] = trip[i]
    const [numGiftNext, pickupNext, deliveryNext] = trip[i + 1]

    if (numGift <= capacity && sum < capacity) {
      if (delivery <= pickupNext) {
        sum -= numGift
      }
      if (pickup <= pickupNext && pickupNext <= delivery) {
        sum += numGiftNext
      }
      sum += numGift
    } else {
      return false
    }
  }
  return (sum <= capacity && sum !== 0) ? true : false
}