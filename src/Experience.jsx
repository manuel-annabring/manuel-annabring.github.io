import { ContactShadows, Float, PresentationControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <color args={['ivory']} attach="background" />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PresentationControls global>
        <Float>
          <mesh position-y={0}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1} />

    </>
  )
}