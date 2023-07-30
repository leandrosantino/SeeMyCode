import { ButtonsBar } from '@/components/ButtonsBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'See My Code'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={twMerge(inter.className, 'w-full h-screen py-8 px-10 flex justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600')}>
        <main className="w-full h-full bg-app-500 rounded-xl flex flex-col overflow-hidden text-app-200">

          <header className='w-full h-7 px-3 flex items-center justify-between ' >
            <div className='flex gap-2 hover:cursor-pointer' >
              <div className='w-3 h-3 rounded-full bg-red-500 '></div>
              <div className='w-3 h-3 rounded-full bg-yellow-300 '></div>
              <div className='w-3 h-3 rounded-full bg-green-400 '></div>
            </div>
            <h1 className='text-sm font-light' >Home</h1>
            <div></div>
          </header>

          <section className='flex-1 grid grid-cols-editor' >

            <ButtonsBar />

            <aside
              className='bg-app-800 h-full'
            ></aside>

            <section className='relative'>
              {children}
            </section>

          </section>

          <footer className='bg-app-400 w-full h-6 px-3 flex gap-1 justify-end items-center' >
            &copy; <span className='text-xs' >leandrosantino</span>
          </footer>

        </main>
      </body>
    </html>
  )
}
