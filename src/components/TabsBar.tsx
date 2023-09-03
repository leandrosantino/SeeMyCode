'use client'
import { usePathname, useParams } from 'next/navigation'
import { XIcon } from 'lucide-react'
import { FileIcon } from './FIleIcon'
import { useEffect, useState } from 'react'
import { PATHS } from '@/utils/pathnames'

export function TabsBar() {

  const pathname = usePathname()
  const params = useParams()

  const [info, setInfo] = useState<{
    name: string,
    lang: string
  }>()

  useEffect(() => {

    if (pathname.split('/')[1] === 'projects') {
      setInfo({
        lang: 'markdown',
        name: params.name as string + '.md'
      })
      return
    }

    setInfo(PATHS[pathname as keyof typeof PATHS])

  }, [pathname, params.name])

  return (
    <div
      className='w-full bg-app-500 z-30'
    >
      <div
        className='h-full min-w-36 w-fit bg-app-400 flex justify-between items-center gap-2 text-xs p-2 border-t border-app-200'
      >
        <div
          className='flex gap-1 text-app-100'
        >
          <FileIcon size={15} src={info?.lang as string} />
          {info?.name.toLowerCase()}
        </div>
        <button
          className='p-0.5 rounded bg-app-400 hover:bg-white hover:bg-opacity-20 text-app-100'
        >
          <XIcon size={15} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )

}
