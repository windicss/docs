import type MarkdownIt from 'markdown-it'

export const mdRenderFilename = (md: MarkdownIt) => {
  const fence = md.renderer.rules.fence!
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    const langInfo = token.info.split(' ')
    const langName = langInfo?.length ? langInfo[0] : ''
    const filename = langName.length && langInfo[1] ? langInfo[1] : null

    // remove filename
    token.info = langName

    const rawCode = fence(...args)

    const finalCode = filename
      ? rawCode.replace(/<div class="language-(\w+)">/, `<div class="language-$1 with-filename"><div class="code-block-filename">${filename}</div>`)
      : rawCode

    return finalCode
  }
}
