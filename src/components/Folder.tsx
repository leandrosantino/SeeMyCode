'use client'

import * as Collapsible from '@radix-ui/react-collapsible';
import { Folder as FolderIcon, ChevronDown, ChevronRight } from 'lucide-react'
import { ReactNode, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge'
import { usePathname } from 'next/navigation'
import { FileIcon } from './FIleIcon';

interface FolderProps {
  children: ReactNode
  title: string
  className?: string
  reference?: string
}

export function Folder({ children, title, className, reference }: FolderProps) {

  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (reference) {
      if (reference.toString() === '/') {
        setOpen(pathname === reference.toString())
      }
      setOpen(pathname.startsWith(reference.toString()))
    }
  }, [pathname, reference])


  return (
    <Collapsible.Root
      className="w-full text-xs"
      open={open} onOpenChange={setOpen}
    >

      <Collapsible.Trigger
        className={twMerge("px-2 py-1 flex w-full items-center gap-2 hover:bg-app-400", className)}
      >
        {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
        {/* <FolderIcon size={15} strokeWidth={2} /> */}
        <FileIcon size={15} src='folder-project' />
        <span>{title}</span>
      </Collapsible.Trigger>

      <Collapsible.Content>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
