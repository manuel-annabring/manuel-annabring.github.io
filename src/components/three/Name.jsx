import { Text } from "@react-three/drei";
import { useControls } from "leva";

export default function Name() {
  const { position, maxWidth, fontSize } = useControls("Name", { position: [0, 0.8, 0], maxWidth: 0.4, fontSize: 0.4 });
  return (
    <Text
      position={position}
      color="#3c79b4"
      fontWeight="bold"
      lineHeight={0.95}
      maxWidth={maxWidth}
      textAlign="center"
      fontSize={fontSize}
      outlineWidth={0.04}
      outlineColor="#d2dce6"
    >
      MANUEL ANNABRING
    </Text>
  );
}
