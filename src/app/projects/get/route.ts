import axios from 'axios'
import { NextResponse } from 'next/server'

interface Project {
  default_branch: string
  name: string
}

export async function GET() {
  const { data: projects } = await axios.get<Project[]>('https://api.github.com/users/leandrosantino/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB}`
    }
  })

  return NextResponse.json(projects.map(entry => ({
    default_branch: entry.default_branch,
    name: entry.name
  })))
}
