export const echotest = x => x

export function cssIf(condition, className = '') {
  if (condition) return className;
  else return ''
}

export function getTimeDifference(datestring, now = Date.now()) {
  const date = new Date(datestring)
  return date.getTime() - now
}

export function getTimeProgress(datestring1, datestring2, now = Date.now()) {
  const t1 = new Date(datestring1).getTime()
  const t2 = new Date(datestring2).getTime()
  const v1 = now - t1
  const v2 = t2 - t1
  return (v1 * 100) / (v2)
}