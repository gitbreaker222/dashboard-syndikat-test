export const echotest = x => x

export function cssIf(condition, className = '') {
  if (condition) return className;
  else return ''
}

export function getTimeDifference(datestring, now = Date.now()) {
  const date = new Date(datestring)
  return date.getTime() - now
}