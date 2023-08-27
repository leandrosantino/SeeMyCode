'use client'
import { ReactNode } from "react";
import { ButtonsBar } from "./ButtonsBar";
import { Explorer } from "./Explorer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TabsBar } from "./TabsBar";
import { useMenu } from "@/hooks/useMenu";

export function Main({ children }: { children: ReactNode }) {

  const menu = useMenu()

  return (
    <main className="w-full h-full bg-app-500 rounded-xl grid grid-rows-editor overflow-hidden text-app-200">

      <Header />
      <section className='grid md:grid-cols-editor-menuOn grid-cols-editor-menuOff relative' >
        <ButtonsBar />
        <Explorer />
        <section className='grid grid-rows-codeviewer gap-1' >
          <TabsBar />
          {children}
        </section>
      </section>
      <Footer />

    </main>
  )
}
