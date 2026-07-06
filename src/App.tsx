import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import Sidebar from './components/Sidebar'

function App() {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Sidebar />
      <h1 className="text-3xl font-bold underline text-black">
        Hello world!
      </h1>
      <div className="h-[100px] w-[100px] bg-red"></div>
    </ReactLenis>
  )
}

export default App
