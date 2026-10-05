import useColumn from "./useColumn";

export default function ColumnCap() {
  const { body, cap } = useColumn();
  return (
    <mesh position-y={body.height / 2 + cap.height / 2}>
      <cylinderGeometry args={[cap.radius, cap.radius, cap.height, cap.radialSegments]} />
      <meshStandardMaterial flatShading />
    </mesh>
  );
}
