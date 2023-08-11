'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { twMerge } from 'tailwind-merge'

export function File({ icon, title, className, href }: { href: string, title: string, icon: ReactNode, className?: string }) {

  const pathname = usePathname()

  return (
    <Link
      href={href}
      data-active={href === pathname ? 'on' : 'off'}
      className={twMerge("px-2 py-1 w-full flex gap-2 hover:bg-app-400 data-[active=on]:bg-app-400 text-xs", className)}
    >
      <div >
        {icon}
      </div>
      <span>{title}</span>
    </Link>
  )
}
