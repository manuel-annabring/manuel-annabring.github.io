import { Center, Text3D, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils } from "three";
import { useControls } from "leva";

const BASE_COLOR = "#222222";
const HOVER_COLOR = "#3c79b4";
const LIFT = 0.15;

export default function Link({ text, href, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const controls = useControls(`Link ${text}`, {
    position: { value: position, step: 0.05 },
    rotation: { value: rotation, min: -Math.PI, max: Math.PI, step: 0.01 },
  });
  const lift = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  useFrame((_, delta) => {
    lift.current.position.y = MathUtils.damp(lift.current.position.y, hovered ? LIFT : 0, 8, delta);
  });

  // a drag (PresentationControls) must not count as a click
  const open = (event) => {
    if (event.delta > 2) return;
    event.stopPropagation();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <group position={controls.position} rotation={controls.rotation} scale={scale}>
      <group ref={lift}>
        <Center
          onClick={open}
          onPointerOver={(event) => {
            event.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
        >
          <Text3D
            font="./fonts/archivo/archivo-black-regular.json"
            size={0.6}
            height={0.18}
            curveSegments={8}
            bevelEnabled
            bevelSize={0.01}
            bevelThickness={0.02}
            bevelSegments={3}
          >
            {text}
            <meshStandardMaterial color={hovered ? HOVER_COLOR : BASE_COLOR} />
          </Text3D>
        </Center>
      </group>
    </group>
  );
}
