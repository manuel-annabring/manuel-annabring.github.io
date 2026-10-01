import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

// TODO: check tone mapping

export default function App() {
  return (
    <Canvas className="r3f">
      <Experience />
    </Canvas>
  )
}
