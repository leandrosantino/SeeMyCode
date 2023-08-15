import { ButtonsBar } from '@/components/ButtonsBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TabsBar } from '@/components/TabsBar'

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
        <main className="w-full h-full bg-app-500 rounded-xl grid grid-rows-editor overflow-hidden text-app-200">

          <Header />
          <section className='grid grid-cols-editor' >
            <ButtonsBar />
            <Navbar />
            <section className='grid grid-rows-codeviewer gap-1' >
              <TabsBar />
              {children}
            </section>
          </section>
          <Footer />

        </main>
      </body>
    </html>
  )
}
