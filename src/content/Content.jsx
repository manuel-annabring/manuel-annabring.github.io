import { Suspense } from "react";
import useColumn from "../column/useColumn";
import ImagePoster from "./ImagePoster";
import posterConfig from "./posterConfig";
import posters from "./posters";
import TextPoster from "./TextPoster";
import { useTexture } from "@react-three/drei";

export default function Content() {
  const { body } = useColumn();

  const normalMapTexture = useTexture("/textures/Paper005_1K-JPG_NormalGL.jpg");

  return posters.map((poster) => {
    const { type, id, layer = 1 } = poster;

    const radius = body.radius + posterConfig.layerStep * layer;

    if (type === "image") {
      return (
        <Suspense key={id}>
          <ImagePoster poster={poster} radius={radius} normalMapTexture={normalMapTexture} />
        </Suspense>
      );
    }
    if (type === "text") {
      return (
        <Suspense key={id}>
          <TextPoster poster={poster} radius={radius} />
        </Suspense>
      );
    }
  });
}
