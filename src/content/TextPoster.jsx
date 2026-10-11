import { Text } from "@react-three/drei";
import posterConfig from "./posterConfig";

export default function TextPoster({ position, text, fontSize, bodyRadius }) {
  const radiusWithOffset = bodyRadius + posterConfig.radiusOffset;
  return (
    <group rotation-y={position.angle} position-y={position.y}>
      <Text
        position-z={radiusWithOffset}
        color="black"
        fontSize={fontSize}
        curveRadius={-radiusWithOffset}
        glyphGeometryDetail={posterConfig.textRadialSegmentsPerGlyph}
      >
        {text}
      </Text>
    </group>
  );
}
