import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { MenuContextProvider } from '@/contexts/menuContext'
import { Main } from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'See My Code'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <MenuContextProvider>
        <body className={twMerge(inter.className, 'w-full h-screen lg:py-8 p-1 lg:px-10 flex justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600')}>
          <Main>
            {children}
          </Main>
        </body>
      </MenuContextProvider>
    </html>
  )
}


