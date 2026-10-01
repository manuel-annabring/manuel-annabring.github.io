import { ContactShadows, Float, PresentationControls } from "@react-three/drei";
import Box from "./Box";
import Name from "./Name";

export default function Experience() {
  return (
    <>
      <color args={['ivory']} attach="background" />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PresentationControls global>
        <Float>
          <Box />
          <Name />
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1} />

    </>
  )
}