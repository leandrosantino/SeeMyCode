'use client'

import ReactMD from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';


export function RenderMD({ children }: { children: string }) {
  return (
    <div
      className={`
        text-slate-200
        prose prose-violet prose-invert
        prose-h1:border-b-2
        prose-h2:border-b-2
        prose-h1:border-slate-800
        prose-h2:border-slate-800
        prose-h1:py-1
        prose-h2:py-1
      `}
    >
      <ReactMD
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                {...props}
                style={theme}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  backgroundColor: 'transparent'
                }}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}

      >
        {children}
      </ReactMD>
      <br />
    </div>
  )
}
