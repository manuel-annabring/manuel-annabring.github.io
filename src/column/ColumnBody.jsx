import useColumn from "./useColumn";

export default function ColumnBody() {
  const { body } = useColumn();
  return (
    <mesh>
      <cylinderGeometry args={[body.radius, body.radius, body.height, body.radialSegments]} />
      <meshStandardMaterial flatShading />
    </mesh>
  );
}
