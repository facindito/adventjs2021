export default function getCoins(change) {
  let coins = [50, 20, 10, 5, 2, 1]
  let minChange = [0, 0, 0, 0, 0, 0]
  for (let i = 0; i <= coins.length - 1; i++) {
    while (change >= coins[i]) {
      minChange[i] += 1
      change -= coins[i]
    }
  }
  return minChange.reverse()
}