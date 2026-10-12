import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { MathUtils } from "three";

export default function Controls() {
  const { minDistance, maxDistance, minPolarAngle, maxPolarAngle } = useControls("Controls", {
    minDistance: { value: 7, min: 0, max: 10, step: 0.1 },
    maxDistance: { value: 15, min: 1, max: 50, step: 0.1 },
    minPolarAngle: { value: 30, min: 0, max: 180, step: 1 },
    maxPolarAngle: { value: 90, min: 0, max: 180, step: 1 },
  });

  return (
    <OrbitControls
      makeDefault
      enablePan={false}
      minPolarAngle={MathUtils.degToRad(minPolarAngle)}
      maxPolarAngle={MathUtils.degToRad(maxPolarAngle)}
      minDistance={minDistance}
      maxDistance={maxDistance}
    />
  );
}
