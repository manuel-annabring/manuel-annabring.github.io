import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import Experience from "./Experience.jsx";

export default function App() {
  return (
    <>
      <Canvas className="r3f" camera={{ fov: 35, position: [2.9, 3.36, 9.84] }}>
        <Experience />
      </Canvas>
      <Leva hidden={!window.location.hash.includes("#debug")} />
    </>
  );
}
