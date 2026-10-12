import { Environment } from "@react-three/drei";
import { useControls } from "leva";

export default function Lights() {
  const { environmentIntensity } = useControls("Environment", {
    environmentIntensity: { value: 1.3, min: 0, max: 5, step: 0.1 },
  });

  const { position, intensity } = useControls("Directional light", {
    position: { value: [5, 4, 4] },
    intensity: { value: 1.5, min: 0, max: 10, step: 0.1 },
  });

  return (
    <>
      <Environment preset="city" environmentIntensity={environmentIntensity} />
      <directionalLight position={position} intensity={intensity} />
    </>
  );
}
