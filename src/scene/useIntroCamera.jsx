import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils, Vector3 } from "three";
import sceneConfig from "./sceneConfig";

const cameraStartVector = new Vector3(...sceneConfig.cameraStartPosition);
const cameraRestVector = new Vector3(...sceneConfig.cameraRestPosition);

export default function useIntroCamera() {
  const elapsedTime = useRef(0);

  const [introIsFinished, setIntroIsFinished] = useState(false);

  useFrame((state, delta) => {
    if (introIsFinished) return;

    elapsedTime.current += delta;
    const t = Math.min(elapsedTime.current / sceneConfig.introDuration, 1);
    const tSmoothed = MathUtils.smootherstep(t, 0, 1);

    state.camera.position.lerpVectors(cameraStartVector, cameraRestVector, tSmoothed);
    state.camera.lookAt(0, 0, 0);
    if (t >= 1) {
      setIntroIsFinished(true);
    }
  });

  return introIsFinished;
}
