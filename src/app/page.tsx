import { MdContainer } from "@/components/MdContainer"
import axios from "axios"

export default async function Home() {

  const { data } = await axios.get<string>('https://raw.githubusercontent.com/leandrosantino/SeeMyCode/dev/public/home.md')


  return (
    <MdContainer {...{ data }} />
  )
}
