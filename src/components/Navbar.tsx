import { MoreHorizontal } from 'lucide-react'
import { Folder } from './Folder'
import { File } from './File'
import axios from 'axios'
import { FileIcon } from './FIleIcon'

interface Project {
  default_branch: string
  name: string
}

export async function Navbar() {

  const { data: projects } = await axios.get<Project[]>('https://api.github.com/users/leandrosantino/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB}`
    }
  })

  return (
    <nav
      className='bg-app-800 h-full'
    >
      <div
        className="text-xs h-8 px-4 mb-2 bg-app-700 flex items-center justify-between"
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
          <File href={`/projects/${default_branch}/${name}`} icon={<FileIcon size={15} src='markdown' />} title={`${name}.md`} className='pl-10' />
        ))}
      </Folder>

      <File href={`/aboutMe`} icon={<FileIcon size={15} src='html' />} title={'sobreMim.html'} className='pl-7' />
      <File href={`/techs`} icon={<FileIcon size={15} src='typescript' />} title={'tecnologias.ts'} className='pl-7' />
      <File href={`/`} icon={<FileIcon size={15} src='javascript' />} title={'index.js'} className='pl-7' />

    </nav>
  )
}
