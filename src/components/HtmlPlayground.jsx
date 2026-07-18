import { useState } from "react"

export default function HtmlPlayground({ initialHtml = "" }) {
  const [html, setHtml] = useState(initialHtml)

  return (
    <div className="w-full min-w-0 rounded-xl border-2 border-azul/10 shadow-[6px_6px_0px_rgba(0,0,0,0.12)] overflow-hidden bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px] sm:min-h-[560px] md:min-h-[620px]">
        <div className="flex flex-col min-h-[280px] md:min-h-0 border-b md:border-b-0 md:border-r border-azul/10">
          <div className="px-4 py-2.5 bg-[#2d2d2d] text-xs font-bold uppercase tracking-wide text-[#7dbe6c] border-b border-black/20">
            HTML
          </div>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            spellCheck={false}
            placeholder="Escribe tu código HTML aquí..."
            className="flex-1 w-full min-h-[240px] p-4 font-mono text-sm leading-relaxed text-[#7dbe6c] bg-[#1e1e1e] resize-none outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="flex flex-col min-h-[280px] md:min-h-0">
          <div className="px-4 py-2.5 bg-grisbg text-xs font-bold uppercase tracking-wide text-azul border-b border-azul/10">
            Resultado
          </div>
          <iframe
            title="Vista previa HTML"
            srcDoc={html}
            sandbox=""
            className="flex-1 w-full min-h-[240px] bg-white"
          />
        </div>
      </div>
    </div>
  )
}
