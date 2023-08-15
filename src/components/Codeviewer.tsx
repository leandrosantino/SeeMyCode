import shiki from 'shiki'

interface CodeviewerProps {
  code: string
}

export async function Codeviewer({ code }: CodeviewerProps) {

  const highlighter = await shiki.getHighlighter({
    theme: 'dark-plus',
  })

  const html = highlighter.codeToHtml(code, { lang: 'js' })

  return (
    <div
      className='relative'
    >
      <div
        className='
        pb-5
        w-full
        absolute
        inset-0
        overflow-x-auto
        leading-relaxed
        scrollbar
        scrollbar-thumb-app-400
        scrollbar-track-transparent
        px-2
        text-lg
      '
        id="shiki-code"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
