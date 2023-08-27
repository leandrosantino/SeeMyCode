import axios from 'axios'
import { RenderMD } from '@/components/RenderMD'
import { MdContainer } from '@/components/MdContainer'

export const revalidate = 3600

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
    <MdContainer {...{ data }} />
  )
}
