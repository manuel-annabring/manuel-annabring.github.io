import { Text } from "@react-three/drei";
import posterConfig from "./posterConfig";

export default function TextPoster({ poster, radius }) {
  const { position, text, fontSize } = poster;

  return (
    <group rotation-y={position.angle} position-y={position.y}>
      <Text
        position-z={radius}
        color="black"
        fontSize={fontSize}
        curveRadius={-radius}
        glyphGeometryDetail={posterConfig.textGlyphDetail}
      >
        {text}
      </Text>
    </group>
  );
}
