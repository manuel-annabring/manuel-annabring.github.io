import { ContactShadows, Float, PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Name from "./components/three/Name";
import Link from "./components/three/Link";
import { useControls } from "leva";

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
  return (
    <>
      <color args={["ivory"]} attach="background" />

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
