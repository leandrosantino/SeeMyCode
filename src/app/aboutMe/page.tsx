import { MdContainer } from "@/components/MdContainer"
import axios from "axios"

export default async function AboutMe() {

  const { data } = await axios.get<string>('https://raw.githubusercontent.com/leandrosantino/SeeMyCode/dev/public/aboutMe.md')

  return (
    <MdContainer {...{ data }} />
  )
}
