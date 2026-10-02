import { Float, PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";
import { useLayoutEffect, useRef } from "react";
import Link from "./components/three/Link";
import Name from "./components/three/Name";

const LINKS = [
  {
    text: "GitHub",
    href: "https://github.com/manuel-annabring",
  },
  {
    text: "MANNABRI",
    href: "https://mannabri.de",
  },
  {
    text: "X",
    href: "https://x.com/manuelannabring",
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/manuel-annabring",
  },
];

export default function Experience() {
  const linkFloatControls = useControls("Link Float", { speed: 1, floatIntensity: 0.7, rotationIntensity: 0.5 });

  const { cameraPosition, cameraTarget, fov } = useControls("Camera", {
    cameraPosition: { value: [-3, 2.5, 7], step: 0.1 },
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

      <directionalLight position={[1, 2, 3]} intensity={10.5} />
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
            <Link text={link.text} href={link.href} position={[0, -index, 0]} />
          </Float>
        ))}
      </PresentationControls>
    </>
  );
}
