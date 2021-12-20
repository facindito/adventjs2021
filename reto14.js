export default function missingReindeer(ids) {
  return ids
    .sort((a, b) => a - b)
    .filter((a, b) => a !== b + 1)
    .length
}