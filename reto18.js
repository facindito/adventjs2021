export default function fixFiles(files) {
  let repetitions = {}
  return files.map((file) => {
    (repetitions[file])
      ? repetitions[file] += 1
      : repetitions[file] = 1
    return (repetitions[file] === 1)
      ? file
      : `${file}(${repetitions[file] - 1})`
  })
}