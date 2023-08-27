import { Codeviewer } from "@/components/Codeviewer"
import axios from "axios"

export default async function Home() {

  const { data: code } = await axios.get<string>('https://raw.githubusercontent.com/leandrosantino/SeeMyCode/dev/public/home.md')

  return (
    <Codeviewer {...{ code }} />
  )
}
