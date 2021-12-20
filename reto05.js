export default function daysToXmas(date) {
  let elDia = new Date('Dec 25, 2021')
  return Math.ceil((elDia.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}
