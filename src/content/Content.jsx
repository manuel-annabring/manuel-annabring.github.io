import { Suspense } from "react";
import useColumn from "../column/useColumn";
import ImagePoster from "./ImagePoster";
import posters from "./posters";
import TextPoster from "./TextPoster";

export default function Content() {
  const { body } = useColumn();

  return posters.map((poster) => {
    const { type, id, position, fontSize, text } = poster;

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
          <TextPoster position={position} text={text} fontSize={fontSize} bodyRadius={body.radius} />
        </Suspense>
      );
    }
  });
}
