import { useState } from "react"
import { Index } from "./Index"

export function Content () {
  const [count, setCount] = useState(0)
  
  return (
    <div className="container mx-auto min-h-0 flex flex-col">
      <h1 className='text-8xl font-bold underline'>Tailwind Practice</h1>
      <div className="card">
        <button className='bg-sky-500/50' onClick={() => setCount((count) => count + 1)}>
          ADHD BUTTON <br/>
          {count}
        </button>
        <div>
          <Index />
        </div>
      </div>
    </div>
  )
}