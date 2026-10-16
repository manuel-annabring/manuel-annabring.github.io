import { useTexture } from "@react-three/drei";
import useColumn from "../column/useColumn";
import ImagePoster from "./ImagePoster";
import posterConfig from "./posterConfig";
import posters from "./posters";
import TextPoster from "./TextPoster";

export default function Content() {
  const { body } = useColumn();

  const normalMapTexture = useTexture("/textures/Paper005_1K-JPG_NormalGL.jpg");

  return posters.map((poster) => {
    const { type, id, layer = 1 } = poster;

    const radius = body.radius + posterConfig.layerStep * layer;

    if (type === "image") {
      return <ImagePoster key={id} poster={poster} radius={radius} normalMapTexture={normalMapTexture} />;
    }
    if (type === "text") {
      return <TextPoster key={id} poster={poster} radius={radius} />;
    }
  });
}
