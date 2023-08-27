'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react"

interface IMenuContext {
  show: boolean
  setShow: (value: IMenuContext['show']) => void
  position: 'absolute' | 'fixed'
}

export const menuContext = createContext({} as IMenuContext)
const { Provider } = menuContext

const SIZE_VARIANTS = {
  sm: 768
}

export function MenuContextProvider({ children }: { children: ReactNode }) {

  const [show, setValue] = useState(true)
  const [position, setPositon] = useState<IMenuContext['position']>('fixed')

  useEffect(() => {
    window.addEventListener('load', () => {
      if (window.innerWidth <= SIZE_VARIANTS.sm) {
        setPositon('absolute')
      }
    })

    window.addEventListener('resize', () => {
      if (window.innerWidth >= SIZE_VARIANTS.sm) {
        setValue(true)
        setPositon('fixed')
        return
      }
      setValue(false)
      setPositon('absolute')
    })
  }, [])

  function setShow(value: boolean) {
    if (window.innerWidth < SIZE_VARIANTS.sm) {
      setValue(value)
    }
  }

  return (
    <Provider
      value={{
        show,
        setShow,
        position
      }}
    >
      {children}
    </Provider>
  )
}
