import { ContactShadows, PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Name from "./components/three/Name";
import Link from "./components/three/Link";

const LINKS = [
  {
    text: "MANNABRI",
    href: "https://mannabri.de",
    position: [-3.7, 0.3, 0],
    rotation: [0, 0, 0],
  },
  {
    text: "GitHub",
    href: "https://github.com/manuel-annabring",
    position: [-1.25, 0.3, 0],
    rotation: [0, 0, 0],
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/manuel-annabring",
    position: [1.25, 0.3, 0],
    rotation: [0, 0, 0],
  },
  {
    text: "X",
    href: "https://x.com/manuelannabring",
    position: [3.7, 0.3, 0],
    rotation: [0, 0, 0],
  },
];

export default function Experience() {
  return (
    <>
      <color args={["ivory"]} attach="background" />

      <directionalLight position={[1, 2, 3]} intensity={10.5} />
      <ambientLight intensity={1.5} />

      <PresentationControls global>
        <Name />
        {LINKS.map((link) => (
          <Link key={link.text} text={link.text} href={link.href} position={link.position} rotation={link.rotation} />
        ))}
      </PresentationControls>
    </>
  );
}
