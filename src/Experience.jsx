import { ContactShadows } from "@react-three/drei";
import { useControls } from "leva";
import Content from "./Content";
import Shadows from "./Shadows";
import Camera from "./Camera";

export default function Experience() {
  return (
    <>
      {/* Background */}
      <color args={["ivory"]} attach="background" />

      {/* Camera */}
      <Camera />

      {/* Lights */}
      <directionalLight position={[5, 2, 4]} intensity={8} />
      <ambientLight intensity={1.5} />

      {/* Content */}
      <Content />

      {/* Shadows */}
      <Shadows />
    </>
  );
}
