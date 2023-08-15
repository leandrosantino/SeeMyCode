'use client'
import { PATHS } from '@/utils/pathnames'
import { useParams, usePathname } from 'next/navigation'

export function Header() {

  const pathname = usePathname()
  const params = useParams()

  return (
    <header className='w-full px-3 flex items-center justify-between ' >
      <div className='flex gap-2 hover:cursor-pointer' >
        <div className='w-3 h-3 rounded-full bg-red-500 '></div>
        <div className='w-3 h-3 rounded-full bg-yellow-300 '></div>
        <div className='w-3 h-3 rounded-full bg-green-400 '></div>
      </div>
      <h1 className='text-xs font-light' >
        SeeMycode - {
          pathname.split('/').includes('projects') ?
            params?.name + '.md' :
            PATHS[pathname as keyof typeof PATHS].name
        }
      </h1>
      <div></div>
    </header>
  )
}
