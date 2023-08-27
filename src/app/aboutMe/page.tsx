import { Codeviewer } from "@/components/Codeviewer"
import axios from "axios"

export default async function AboutMe() {

  const { data: code } = await axios.get<string>('https://raw.githubusercontent.com/leandrosantino/SeeMyCode/dev/public/aboutMe.md')

  return (
    <Codeviewer {...{ code }} />
  )
}
