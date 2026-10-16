import { Text } from "@react-three/drei";
import posterConfig from "./posterConfig";
import useLink from "./useLink";

export default function TextPoster({ poster, radius }) {
  const { position, text, fontSize, url } = poster;

  const { onClick, onPointerOver, onPointerOut } = useLink(url);

  return (
    <group rotation-y={position.angle} position-y={position.y}>
      <Text
        position-z={radius}
        color="black"
        fontSize={fontSize}
        curveRadius={-radius}
        glyphGeometryDetail={posterConfig.textGlyphDetail}
        onClick={onClick}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        {text}
      </Text>
    </group>
  );
}
