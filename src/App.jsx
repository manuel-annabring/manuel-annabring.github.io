import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import Experience from "./Experience.jsx";

export default function App() {
  return (
    <>
      <Canvas className="r3f">
        <Experience />
      </Canvas>
      <Leva hidden={!window.location.hash.includes("#debug")} />
    </>
  );
}
