import { PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import { useLayoutEffect, useRef } from "react";

export default function Camera() {
  const { cameraPosition, cameraTarget, fov } = useControls("Camera", {
    cameraPosition: { value: [-1.5, 1.1, 3.5], step: 0.1 },
    cameraTarget: { value: [0, 0, 0], step: 0.1 },
    fov: { value: 40, min: 10, max: 120, step: 1 },
  });

  // PerspectiveCamera looks down -z by default, so aim it at the target whenever position or target changes
  const camera = useRef();
  useLayoutEffect(() => {
    camera.current.lookAt(...cameraTarget);
  }, [cameraPosition, cameraTarget]);

  return <PerspectiveCamera ref={camera} makeDefault position={cameraPosition} fov={fov} />;
}
