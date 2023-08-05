import { Files, Search, Share2, Bug, Monitor, FlaskConical, User, Settings, Menu } from 'lucide-react';
import { twMerge } from 'tailwind-merge'

const className = {
  icon: 'w-full py-2 data-[select=on]:border-l-[3.5px] border-app-200 flex justify-center items-center hover:cursor-pointer hover:text-app-100 hover:border-app-100',
  iconCase: 'flex flex-col gap-3'
}

export function ButtonsBar() {
  return (
    <aside
      className='h-full flex flex-col gap-3 justify-between'
    >
      <div className={className.iconCase}>
        <div className={twMerge(className.icon, 'p-0 mt-1')}>
          <Menu strokeWidth={1.5} size={20} />
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
        <div className={className.icon}>
          <User strokeWidth={1.5} size={25} />
        </div>
        <div className={className.icon}>
          <Settings strokeWidth={1.5} size={25} />
        </div>
      </div>

    </aside>
  )
}
