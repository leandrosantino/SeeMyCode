export function Header() {
  return (
    <header className='w-full px-3 flex items-center justify-between ' >
      <div className='flex gap-2 hover:cursor-pointer' >
        <div className='w-3 h-3 rounded-full bg-red-500 '></div>
        <div className='w-3 h-3 rounded-full bg-yellow-300 '></div>
        <div className='w-3 h-3 rounded-full bg-green-400 '></div>
      </div>
      <h1 className='text-sm font-light' >SeeMycode - Home</h1>
      <div></div>
    </header>
  )
}
