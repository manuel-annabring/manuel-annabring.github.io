import { Text } from "@react-three/drei";
import { Suspense } from "react";
import useColumn from "../column/useColumn";
import ImagePoster from "./ImagePoster";
import posterConfig from "./posterConfig";
import posters from "./posters";

export default function Content() {
  const { body } = useColumn();

  return posters.map((poster) => {
    const { type, id, position, scale, text } = poster;

    if (type === "image") {
      return (
        <Suspense key={id}>
          <ImagePoster poster={poster} bodyRadius={body.radius} />
        </Suspense>
      );
    }
    if (type === "text") {
      return (
        <Suspense key={id}>
          <group rotation-y={position.angle} position-y={position.y}>
            <Text position-z={body.radius + posterConfig.radiusOffset} color="black" scale={scale}>
              {text}
            </Text>
          </group>
        </Suspense>
      );
    }
  });
}
