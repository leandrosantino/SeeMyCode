import axios from 'axios'
import { RenderMD } from '@/components/RenderMD'

export default async function Test({ params: { branch, name } }: {
  params: {
    name: string
    branch: string
  }
}) {

  let data = ''
  try {
    data = (await axios.get(`https://raw.githubusercontent.com/leandrosantino/${name}/${branch}/README.md`)).data
  } catch {
    data = '### Not Found'
  }

  return (
    <div
      className='relative'
    >
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
      pb-10
    `}>
        <RenderMD>
          {data}
        </RenderMD>
      </div>
    </div>
  )
}
