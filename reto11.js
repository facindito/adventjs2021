export default function shouldBuyFidelity(times) {
  let card = 250
  let ticket = 12
  let total = 0
  for (let i = 1; i <= times; i++) {
    total += ticket * (Math.pow(0.75, i))
  }
  return (total + card < ticket * times)
    ? true
    : false
}