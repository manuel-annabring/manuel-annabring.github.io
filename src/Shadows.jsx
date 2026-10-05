import { ContactShadows } from "@react-three/drei";
import { useControls } from "leva";

export default function Shadows() {
  const { y, opacity, scale, blur, far } = useControls("Shadow", {
    y: { value: -1, min: -5, max: 0, step: 0.05 },
    opacity: { value: 0.4, min: 0, max: 1, step: 0.05 },
    scale: { value: 6, min: 1, max: 20, step: 0.5 },
    blur: { value: 2.5, min: 0, max: 10, step: 0.1 },
    far: { value: 2.5, min: 0.5, max: 10, step: 0.1 },
  });
  return <ContactShadows position={[0, y, 0]} opacity={opacity} scale={scale} blur={blur} far={far} color="#222222" />;
}
