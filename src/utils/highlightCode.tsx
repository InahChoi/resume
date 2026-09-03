import type { ReactNode } from 'react'

const KEYWORDS =
  /\b(const|let|var|await|async|return|import|from|export|function|class|new|if|else|typeof|interface|type)\b/g
const STRINGS = /('[^']*'|"[^"]*"|`[^`]*`)/g
const COMMENTS = /(\/\/.*$)/gm

type TokenKind = 'keyword' | 'string' | 'comment' | 'plain'

interface Token {
  kind: TokenKind
  value: string
}

function tokenize(code: string): Token[] {
  const markers: Array<{ start: number; end: number; kind: TokenKind }> = []

  for (const match of code.matchAll(COMMENTS)) {
    if (match.index == null) continue
    markers.push({
      start: match.index,
      end: match.index + match[0].length,
      kind: 'comment',
    })
  }

  for (const match of code.matchAll(STRINGS)) {
    if (match.index == null) continue
    if (markers.some((m) => match.index! >= m.start && match.index! < m.end)) {
      continue
    }
    markers.push({
      start: match.index,
      end: match.index + match[0].length,
      kind: 'string',
    })
  }

  for (const match of code.matchAll(KEYWORDS)) {
    if (match.index == null) continue
    if (markers.some((m) => match.index! >= m.start && match.index! < m.end)) {
      continue
    }
    markers.push({
      start: match.index,
      end: match.index + match[0].length,
      kind: 'keyword',
    })
  }

  markers.sort((a, b) => a.start - b.start)

  const tokens: Token[] = []
  let cursor = 0

  for (const marker of markers) {
    if (marker.start < cursor) continue
    if (marker.start > cursor) {
      tokens.push({ kind: 'plain', value: code.slice(cursor, marker.start) })
    }
    tokens.push({ kind: marker.kind, value: code.slice(marker.start, marker.end) })
    cursor = marker.end
  }

  if (cursor < code.length) {
    tokens.push({ kind: 'plain', value: code.slice(cursor) })
  }

  return tokens
}

export function highlightCode(
  code: string,
  classNames: Record<TokenKind, string | undefined>,
): ReactNode[] {
  return tokenize(code).map((token, index) => {
    const className = classNames[token.kind]
    if (!className || token.kind === 'plain') {
      return <span key={index}>{token.value}</span>
    }
    return (
      <span key={index} className={className}>
        {token.value}
      </span>
    )
  })
}
