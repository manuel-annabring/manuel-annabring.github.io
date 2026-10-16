import { useCursor } from "@react-three/drei";
import { useState } from "react";
import posterConfig from "./posterConfig";

export default function useLink(url) {
  const isInteractive = !!url;

  const [hovered, setHovered] = useState(false);
  useCursor(isInteractive && hovered);

  const onClick = (e) => {
    e.stopPropagation();
    if (isInteractive && e.delta < posterConfig.clickDragThreshold) {
      window.open(url, "_blank", "noopener");
    }
  };

  const onPointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const onPointerOut = () => setHovered(false);

  return { onClick, onPointerOver, onPointerOut };
}
