import type { ReactNode } from 'react'

/** Renders plain text with `inline code` segments. */
export function renderInlineCode(text: string, codeClassName: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`)/g)

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code key={index} className={codeClassName}>
          {part.slice(1, -1)}
        </code>
      )
    }

    return <span key={index}>{part}</span>
  })
}
