import { Text } from "@react-three/drei";
import { useControls } from "leva";

export default function Name() {
  const { position, rotation } = useControls('Name', { position: { value: [0, 0, 0], step: 0.1 }, name: { value: [0, 0, 0], step: 0.1 } })
  return (
    <Text position={position}>Manuel Annabring</Text>
  )
}