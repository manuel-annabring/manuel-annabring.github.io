import { useControls } from "leva"

export default function Box() {
  const { position } = useControls('Box', { position: { value: [-1.4, 0, 0], step: 0.1 } })
  return (
    <mesh position={position}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  )
}