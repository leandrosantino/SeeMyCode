'use client'
import { useMenu } from "@/hooks/useMenu"
import { Explorer } from "./Explorer"

export function NavBar() {
  const menu = useMenu()
  return <Explorer show={menu.show} />
}
