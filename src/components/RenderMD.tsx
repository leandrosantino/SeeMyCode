import ReactMD from 'react-markdown'

export function RenderMD({ children }: { children: string }) {
  return (
    <div
      className={`
      text-slate-200
        prose prose-blue prose-invert
        prose-h1:border-b-2
        prose-h2:border-b-2
        prose-h1:border-slate-800
        prose-h2:border-slate-800
        prose-h1:py-1
        prose-h2:py-1
      `}
    >
      <ReactMD>
        {children}
      </ReactMD>
      <br />
    </div>
  )
}
