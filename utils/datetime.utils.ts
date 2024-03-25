export const convertMilsToTimestamps = (mils: number): string => {
  const jsDate = new Date(mils)

  const year = jsDate.getFullYear()
  const month = String(jsDate.getMonth() + 1).padStart(2, '0')
  const day = String(jsDate.getDate()).padStart(2, '0')
  const hours = String(jsDate.getHours()).padStart(2, '0')
  const minutes = String(jsDate.getMinutes()).padStart(2, '0')
  const seconds = String(jsDate.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
