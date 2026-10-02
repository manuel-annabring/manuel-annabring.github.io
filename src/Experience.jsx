import { ContactShadows, OrbitControls } from "@react-three/drei";
import Name from "./components/three/Name";
import Link from "./components/three/Link";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function Experience() {
  useFrame((state) => {
    console.log(state.camera.position)
  })
  return (
    <>
      <color args={["ivory"]} attach="background" />

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* <PresentationControls global> */}
      {/* <Float> */}
      <Name />
      <Link text={"X"} position={[-0.4, 0.7, 3.3]} rotation={[0, -1.1, 0]} />
      <Link text={"in"} position={[-4.3, 0.7, 1.1]} rotation={[0, 0, 0]} />
      <Link text={"GitHub"} position={[1.7, 0.7, 0.6]} rotation={[0, -0.7, 0]} />
      <Link text={"MANNABRI"} position={[-2.1, 0.7, -3]} rotation={[0, 0, 0]} />
      {/* </Float> */}
      {/* </PresentationControls> */}

      <ContactShadows position-y={0} />
    </>
  );
}
