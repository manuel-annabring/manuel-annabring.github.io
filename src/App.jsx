import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import Experience from "./Experience.jsx";

export default function App() {
  return (
    <>
      <Canvas className="r3f" camera={{position: [0, 2, 5]}}>
        <Experience />
      </Canvas>
      <Leva hidden={!window.location.hash.includes("#debug")} />
    </>
  );
}
