export function truncateTextLength(text: string, maxLength: number, addEllipsis = false) {
  if (text.length <= maxLength) return text

  const ellipsis = addEllipsis ? '...' : ''
  return `${text.substring(0, maxLength - ellipsis.length)}${ellipsis}`
}
