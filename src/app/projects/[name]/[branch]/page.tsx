'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { RenderMD } from '@/components/RenderMD'

export default function Test() {

  const { branch, name } = useParams() as {
    name: string
    branch: string
  }

  const [data, setData] = useState<string>('')

  useEffect(() => {
    (async () => {
      try {
        setData((await axios.get(`https://raw.githubusercontent.com/leandrosantino/${name}/${branch}/README.md`)).data)
      } catch {
        setData('### Not Found')
      }
    })()
  }, [])


  return (
    <div className={`
      w-full
      absolute
      inset-0
      overflow-x-auto
      leading-relaxed
      scrollbar
      scrollbar-thumb-app-400
      scrollbar-track-transparent
      flex justify-center
      py-10
    `}>
      <RenderMD>
        {data}
      </RenderMD>
    </div>
  )
}
