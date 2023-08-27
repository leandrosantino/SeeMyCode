import { ReactNode } from "react";
import { RenderMD } from "./RenderMD";

export function MdContainer({ data }: { data: string }) {
  return (
    <div className='w-full relative'>
      < div
        className='w-full absolute inset-0 overflow-x-auto leading-relaxed scrollbar scrollbar-thumb-app-400 scrollbar-track-transparent flex justify-center p-4 pb-10'
      >
        <RenderMD>
          {data}
        </RenderMD>
      </div >
    </div >
  )
}
