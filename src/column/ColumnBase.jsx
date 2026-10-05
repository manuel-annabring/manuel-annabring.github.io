import useColumn from "./useColumn";

export default function ColumnBase() {
  const { body, base } = useColumn();
  return (
    <mesh position-y={-body.height / 2 - base.height / 2}>
      <cylinderGeometry args={[base.radius, base.radius, base.height, base.radialSegments]} />
      <meshStandardMaterial flatShading />
    </mesh>
  );
}
