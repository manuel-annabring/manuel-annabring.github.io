import { Text } from "@react-three/drei";
import { useControls } from "leva";

export default function Name() {
  const { position, maxWidth, fontSize } = useControls("Name", { position: [0, 2, 0], maxWidth: 6, fontSize: 1 });
  return (
    <Text
      position={position}
      color="#3c79b4"
      fontWeight="bold"
      letterSpacing={-0.04}
      lineHeight={0.95}
      maxWidth={maxWidth}
      textAlign="center"
      fontSize={fontSize}
      outlineWidth={0.07}
      outlineColor="#b2c5d8"
    >
      MANUEL ANNABRING
    </Text>
  );
}
