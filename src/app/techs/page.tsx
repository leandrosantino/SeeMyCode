import { Codeviewer } from "@/components/Codeviewer"
import axios from "axios"

export default async function Techs() {

  const { data: code } = await axios.get<string>('https://raw.githubusercontent.com/leandrosantino/SeeMyCode/dev/public/technologies.txt')

  return (
    <Codeviewer {...{ code }} />
  )
}
