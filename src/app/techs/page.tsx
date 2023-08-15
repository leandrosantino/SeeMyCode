import { Codeviewer } from "@/components/Codeviewer"

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

export default function Techs() {

  return (
    <Codeviewer {...{ code }} />
  )
}
