import { ContactShadows } from "@react-three/drei";
import { useControls } from "leva";
import useColumn from "../column/useColumn";

export default function Shadows() {
  const column = useColumn();

  const { yOffset, opacity, scale, blur, far } = useControls("Shadow", {
    yOffset: { value: 0, min: -1, max: 1, step: 0.05 },
    opacity: { value: 1, min: 0, max: 1, step: 0.05 },
    scale: { value: 14, min: 1, max: 20, step: 0.5 },
    blur: { value: 5, min: 0, max: 10, step: 0.1 },
    far: { value: 2.5, min: 0.5, max: 10, step: 0.1 },
  });
  return (
    <ContactShadows
      position={[0, column.bottomY + yOffset, 0]}
      opacity={opacity}
      scale={scale}
      blur={blur}
      far={far}
      color="#222222"
    />
  );
}
