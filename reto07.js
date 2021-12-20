export default function contains(store, product) {
  return (typeof store === 'string')
    ? store === product
    : Object.values(store).some(subStore => contains(subStore, product))
}