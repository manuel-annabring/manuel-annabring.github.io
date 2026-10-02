import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import Experience from "./Experience.jsx";

export default function App() {
  return (
    <>
      <Canvas
        className="r3f"
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-2.8, 4.3, 6.2],
        }}
      >
        <Experience />
      </Canvas>
      <Leva hidden={!window.location.hash.includes("#debug")} />
    </>
  );
}
