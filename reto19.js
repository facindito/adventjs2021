export default function learn(time, courses) {
  let course = null
  let max = 0
  for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (courses[i] + courses[j] <= time && courses[i] + courses[j] > max) {
        max = courses[i] + courses[j]
        course = [i, j]
      }
    }
  }
  return course
}
