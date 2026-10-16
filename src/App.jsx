import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import AccessibleLinks from "./content/AccessibleLinks.jsx";
import Experience from "./Experience.jsx";
import sceneConfig from "./scene/sceneConfig.js";

export default function App() {
  return (
    <>
      <Canvas
        className="r3f"
        camera={{
          fov: 35,
          position: sceneConfig.cameraStartPosition,
        }}
      >
        <Experience />
      </Canvas>
      <Leva hidden={!window.location.hash.includes("#debug")} />
      <AccessibleLinks />
    </>
  );
}
