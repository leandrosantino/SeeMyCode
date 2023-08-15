import shiki from 'shiki'

const code = `

import { type ITechnology } from 'leandrosantino'

const myTechs: ITechnology[]  = [
  {
    name: 'Javascript'
    experience: '3 years'
  },
  {
    name: 'HTML'
    experience: '3 years'
  },
  {
    name: 'CSS'
    experience: '3 years'
  },
  {
    name: 'Node.js'
    experience: '2 years'
  },
  {
    name: 'Electron.js'
    experience: '2 years'
  },
  {
    name: 'Typescript'
    experience: '1 year and 6 months'
  },
  {
    name: 'React'
    experience: '1 year and 6 months'
  },
  {
    name: 'Next.js'
    experience: '6 months'
  }
]

export myTechs





//
`.trim()

export default async function Techs() {

  const highlighter = await shiki.getHighlighter({
    theme: 'dark-plus',
  })

  const html = highlighter.codeToHtml(code, { lang: 'js' })

  return (
    <div
      className='
        w-full
        absolute
        inset-0
        overflow-x-auto
        leading-relaxed
        scrollbar
        scrollbar-thumb-app-400
        scrollbar-track-transparent
        px-2
      '
      id="shiki-code"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
