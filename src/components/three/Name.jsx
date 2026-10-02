import { Text } from "@react-three/drei";
import { useControls } from "leva";

export default function Name() {
  const { position, rotation, color, letterSpacing, maxWidth } = useControls("Name", {
    position: { value: [-1.4, 0.5, 0.9], step: 0.1 },
    rotation: { value: [0, -0.3, 0], min: -Math.PI * 2, max: Math.PI * 2, step: 0.1 },
    color: "#3c79b4",
    maxWidth: 2.7,
    letterSpacing: -0.04,
  });

  const { outlineWidth, outlineColor } = useControls("Name", {
    outlineWidth: 0.07,
    outlineColor: "#b2c5d8",
  });

  return (
    <Text
      position={position}
      rotation={rotation}
      color={color}
      fontWeight="bold"
      letterSpacing={letterSpacing}
      maxWidth={maxWidth}
      textAlign="center"
      fontSize={0.5}
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
    >
      MANUEL ANNABRING
    </Text>
  );
}
