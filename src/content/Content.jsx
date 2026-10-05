import { Text } from "@react-three/drei";
import useColumn from "../column/useColumn";
import posters from "./posters";

export default function Content() {
  const { body } = useColumn();

  return posters.map((poster) => {
    const { type, id, position, size, scale, text } = poster;

    if (type === "image") {
      return (
        <group key={id} rotation-y={position.angle} position-y={position.y}>
          <mesh position-z={body.radius}>
            <planeGeometry args={[size.width, size.height]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </group>
      );
    }
    if (type === "text") {
      return (
        <group key={id} rotation-y={position.angle} position-y={position.y}>
          <Text position-z={body.radius} color="black" scale={scale}>
            {text}
          </Text>
        </group>
      );
    }
  });
}
