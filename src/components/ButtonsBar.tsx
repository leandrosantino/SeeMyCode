'use client'

import { useMenu } from '@/hooks/useMenu';
import {
  Files,
  Search,
  Share2,
  Bug,
  Monitor,
  FlaskConical,
  User,
  Settings,
  Menu,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon
} from 'lucide-react';
import { twMerge } from 'tailwind-merge'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link';

const className = {
  icon: 'w-full py-2 data-[select=on]:border-l-[3.5px] border-app-200 flex justify-center items-center hover:cursor-pointer hover:text-app-100 hover:border-app-100',
  iconCase: 'flex flex-col gap-3',
  dropdownMenuButton: 'text-xs w-full p-1 flex gap-1 justify-start items-center rounded hover:bg-app-500 hover:cursor-pointer'
}

export function ButtonsBar() {

  const menu = useMenu()

  return (
    <aside
      className='h-full flex flex-col gap-3 justify-between'
    >
      <div className={className.iconCase}>
        <div className={twMerge(className.icon, 'p-0 mt-1')}>
          <button onClick={() => menu.setShow(!menu.show)} >
            <Menu strokeWidth={1.5} size={20} />
          </button>
        </div>
        <div data-select='on' className={className.icon}>
          <Files strokeWidth={1.5} size={25} />
        </div>
        <div className={className.icon}>
          <Search strokeWidth={1.5} size={25} />
        </div>
        <div className={className.icon}>
          <Share2 strokeWidth={1.5} size={25} />
        </div>
        <div className={className.icon}>
          <Bug strokeWidth={1.5} size={25} />
        </div>
        <div className={className.icon}>
          <Monitor strokeWidth={1.5} size={25} />
        </div>
        <div className={className.icon}>
          <FlaskConical strokeWidth={1.5} size={25} />
        </div>
      </div>

      <div className={className.iconCase}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className={twMerge(className.icon, '')}>
              <User strokeWidth={1.5} size={25} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="z-50 min-w-[10rem] ml-2 text-app-100 bg-app-400 rounded-md shadow-md p-2 flex flex-col gap-1"
              sideOffset={-150}
              align='start'
            >

              <DropdownMenu.Item >
                <a
                  target="_blank"
                  href="https://www.instagram.com/leandrosantino_/"
                  rel="noopener noreferrer"
                  className={className.dropdownMenuButton}
                >
                  <InstagramIcon size={15} />
                  <span>Instagram</span>
                </a>
              </DropdownMenu.Item>
              <DropdownMenu.Item >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/leandro-santino-7b2717215/"
                  rel="noopener noreferrer"
                  className={className.dropdownMenuButton}
                >
                  <LinkedinIcon size={15} />
                  <span>Linkedin</span>
                </a>
              </DropdownMenu.Item>
              <DropdownMenu.Item >
                <a
                  target="_blank"
                  href="https://www.github.com/leandrosantino"
                  rel="noopener noreferrer"
                  className={className.dropdownMenuButton}
                >
                  <GithubIcon size={15} />
                  <span>Github</span>
                </a>
              </DropdownMenu.Item>

            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        <div className={className.icon}>
          <Settings strokeWidth={1.5} size={25} />
        </div>
      </div>

    </aside>
  )
}
