import useColumn from "./useColumn";

export default function Column() {
  const column = useColumn();

  return (
    <mesh>
      <cylinderGeometry args={[column.radius, column.radius, column.height, column.radialSegments]} />
      <meshStandardMaterial flatShading />
    </mesh>
  );
}
