import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import Sidebar from './components/Sidebar'
import ScrollHint from './components/ScrollHint'

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
      <ScrollHint />
    </ReactLenis>
  )
}

export default App
