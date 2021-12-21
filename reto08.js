export default function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
  let buy = 0
  let sell = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      sell = prices[i]
    } else if (prices[i] !== prices[prices.length - 1]) {
      if (prices[i] < buy || buy === 0) buy = prices[i]
    }
  }
  return (sell - buy > 0) ? sell - buy : -1
}