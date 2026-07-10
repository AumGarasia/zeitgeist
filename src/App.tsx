import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import Sidebar from './components/Sidebar'
import Cursor from './components/Cursor'
import Carousel from './components/Carousel'

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
      <Cursor />
      <Sidebar />
      <Carousel />
    </ReactLenis>
  )
}

export default App
