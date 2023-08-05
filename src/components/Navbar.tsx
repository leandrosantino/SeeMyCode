import { MoreHorizontal, FileType2 } from 'lucide-react'
import { Folder } from './Folder'
import { File } from './File'
import axios from 'axios'

interface Project {
  default_branch: string
  name: string
}

export async function Navbar() {

  const { data: projects } = await axios.get<Project[]>('https://api.github.com/users/leandrosantino/repos', {
    headers: {
      Authorization: 'Bearer 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'
    }
  })

  return (
    <nav
      className='bg-app-800 h-full'
    >
      <div
        className="text-xs h-7 px-4 mb-2 bg-app-700 flex items-center justify-between"
      >
        <div
          className='h-full flex items-center'
        >
          EXPLORADOR
        </div>
        <MoreHorizontal size={20} />
      </div>


      <Folder title='Projetos' reference="/projects">
        {projects?.map(({ default_branch, name }) => (
          <File href={`/projects/${name}/${default_branch}`} icon={<FileType2 size={15} />} title={name + '.md'} className='pl-10' />
        ))}
      </Folder>

    </nav>
  )
}
