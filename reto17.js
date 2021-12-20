export default function countPackages(carriers, carrierID) {
  let cantidad = 0
  const searchCarrier = (subCarrier, ID, count) => {
    let carrier = subCarrier.find(c => c[0] === ID)
    if (carrier[2].length) {
      for (let i = 0; i < carrier[2].length; i++) {
        count = searchCarrier(carriers, carrier[2][i], count)
      }
    }
    return count += carrier[1]
  }
  return searchCarrier(carriers, carrierID, cantidad)
}