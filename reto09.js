export default function groupBy(collection, it) {
  let group = {}
  collection.map(item => {
    let key = (typeof it === 'function') ? it(item) : item[it]
    group[key] = group[key] || []
    group[key].push(item)
  })
  return group
}
