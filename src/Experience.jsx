import { Float, PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";
import { useLayoutEffect, useRef } from "react";
import Link from "./components/three/Link";
import Name from "./components/three/Name";

const LINKS = [
  {
    text: "X",
    href: "https://x.com/manuelannabring",
  },
  {
    text: "GitHub",
    href: "https://github.com/manuel-annabring",
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/manuel-annabring",
  },
  {
    text: "MANNABRI",
    href: "https://mannabri.de",
  },
];

export default function Experience() {
  const linkFloatControls = useControls("Link Float", { speed: 1, floatIntensity: 0.7, rotationIntensity: 0.5 });

  const textControls = useControls("Link Text", {
    yOffset: {value: 0.1, min: -2, max: 2, step: 0.1},
    size: { value: 0.2, min: 0.1, max: 2, step: 0.05 },
    height: { value: 0.15, min: 0.01, max: 1, step: 0.01 },
    letterSpacing: { value: 0, min: -0.2, max: 0.5, step: 0.01 },
    curveSegments: { value: 8, min: 1, max: 32, step: 1 },
    bevelEnabled: true,
    bevelSize: { value: 0.01, min: 0, max: 0.1, step: 0.005 },
    bevelThickness: { value: 0.02, min: 0, max: 0.2, step: 0.005 },
    bevelSegments: { value: 3, min: 1, max: 12, step: 1 },
  });

  const { cameraPosition, cameraTarget, fov } = useControls("Camera", {
    cameraPosition: { value: [-1.5, 1.1, 3], step: 0.1 },
    cameraTarget: { value: [0, 0, 0], step: 0.1 },
    fov: { value: 45, min: 10, max: 120, step: 1 },
  });

  // PerspectiveCamera looks down -z by default, so aim it at the target whenever position or target changes
  const camera = useRef();
  useLayoutEffect(() => {
    camera.current.lookAt(...cameraTarget);
  }, [cameraPosition, cameraTarget]);

  return (
    <>
      <color args={["ivory"]} attach="background" />

      <PerspectiveCamera ref={camera} makeDefault position={cameraPosition} fov={fov} />

      <directionalLight position={[5, 2, 4]} intensity={20} />
      <ambientLight intensity={1.5} />

      <PresentationControls global>
        <Name />
        {LINKS.map((link, index) => (
          <Float
            key={link.text}
            speed={linkFloatControls.speed}
            floatIntensity={linkFloatControls.floatIntensity}
            rotationIntensity={linkFloatControls.rotationIntensity}
          >
            <Link text={link.text} href={link.href} position={[0, textControls.yOffset - index * 0.38, index * 0.07]} textProps={textControls} />
          </Float>
        ))}
      </PresentationControls>
    </>
  );
}
