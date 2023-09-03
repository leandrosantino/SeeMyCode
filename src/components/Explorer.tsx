'use client'
import { MoreHorizontal } from 'lucide-react'
import { Folder } from './Folder'
import { File } from './File'
import axios from 'axios'
import { FileIcon } from './FIleIcon'
import { twMerge } from 'tailwind-merge'
import { useEffect, useState } from 'react'
import { useMenu } from '@/hooks/useMenu'

interface Project {
  default_branch: string
  name: string
}

export function Explorer() {

  const { show, position, setShow } = useMenu()

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Project[]>(`${window.location.origin}/projects/get`)
        setProjects(data)
      } catch {
        setProjects([])
      }
    })()
  }, [])

  return (
    <>
      <nav
        className={twMerge('bg-app-800 h-full z-50 max-md:absolute max-md:left-12 max-md:w-52', !show && 'hidden')}
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
            <File key={name} href={`/projects/${default_branch}/${name}`} icon={<FileIcon size={15} src='markdown' />} title={`${name.toLowerCase()}.md`} className='pl-10' />
          ))}
        </Folder>

        <File href={`/aboutMe`} icon={<FileIcon size={15} src='html' />} title={'sobreMim.html'} className='pl-7' />
        <File href={`/techs`} icon={<FileIcon size={15} src='typescript' />} title={'tecnologias.ts'} className='pl-7' />
        <File href={`/`} icon={<FileIcon size={15} src='javascript' />} title={'index.js'} className='pl-7' />

      </nav>
      {
        (position === 'absolute' && show) &&
        <div
          className='absolute w-full h-full z-40'
          onClick={() => setShow(false)}
        ></div>
      }
    </>
  )
}
