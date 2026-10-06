import { Text } from "@react-three/drei";
import useColumn from "../column/useColumn";
import posters from "./posters";

const RADIUS_OFFSET = 0.003; // avoid z-fighting between column body and posters
const POSTER_IMAGE_RADIAL_SEGMENTS_MIN = 2;
const POSTER_IMAGE_RADIAL_SEGMENTS_PER_RADIAN = 10;

export default function Content() {
  const { body } = useColumn();

  return posters.map((poster) => {
    const { type, id, position, size, scale, text } = poster;

    if (type === "image") {
      const thetaLength = size.width / body.radius;
      const radialSegments = Math.max(
        Math.ceil(thetaLength * POSTER_IMAGE_RADIAL_SEGMENTS_PER_RADIAN),
        POSTER_IMAGE_RADIAL_SEGMENTS_MIN,
      );
      return (
        <group key={id} rotation-y={position.angle} position-y={position.y}>
          <mesh>
            <cylinderGeometry
              args={[
                body.radius + RADIUS_OFFSET,
                body.radius + RADIUS_OFFSET,
                size.height,
                radialSegments,
                1,
                true,
                -thetaLength / 2,
                thetaLength,
              ]}
            />
            <meshStandardMaterial color="tomato" />
          </mesh>
        </group>
      );
    }
    if (type === "text") {
      return (
        <group key={id} rotation-y={position.angle} position-y={position.y}>
          <Text position-z={body.radius + RADIUS_OFFSET} color="black" scale={scale}>
            {text}
          </Text>
        </group>
      );
    }
  });
}
