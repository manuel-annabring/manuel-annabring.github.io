import { Center, Text3D } from "@react-three/drei";
import { useControls } from "leva";

export default function Link({ text, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { color, position: controlPosition, rotation: controlRotation } = useControls(`Link ${text}`, {
    position: { value: position, step: 0.1 },
    rotation: { value: rotation, min: -Math.PI * 2, max: Math.PI * 2, step: 0.1 },
    color: "#222222",
  });

  return (
    <Center position={controlPosition} rotation={controlRotation}>
      <Text3D font="./fonts/archivo/archivo-black-regular.json" color={color}>
        {text}
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
}
