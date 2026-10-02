import { Center, Text3D, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils } from "three";

const BASE_COLOR = "#222222";
const HOVER_COLOR = "#3c79b4";
const LIFT = 0.15;

export default function Link({ text, href, position }) {
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
    <group position={position}>
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
