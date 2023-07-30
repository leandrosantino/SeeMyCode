import { RenderMD } from '@/components/RenderMD'

function getData() {
  return new Promise((resolve, reject) => {
    fetch('https://raw.githubusercontent.com/leandrosantino/prodnote/master/README.md')
      .then(data => data.text())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}


export default async function Home() {

  const response = await getData() as string

  console.log(response)

  return (
    <div className={`
      w-full
      absolute
      inset-0
      overflow-x-auto
      leading-relaxed
      scrollbar
      scrollbar-thumb-[#2B283B]
      scrollbar-track-transparent
      flex justify-center
    `}>
      <RenderMD>
        {response}
      </RenderMD>
    </div>
  )
}
