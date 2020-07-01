export function cssIf(condition, className = '') {
  if (condition) return className;
  else return ''
}