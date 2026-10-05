import column from "./columnConfig";

export default function Column() {
  return (
    <mesh>
      <cylinderGeometry args={[column.radius, column.radius, column.height, column.radialSegments]} />
      <meshStandardMaterial flatShading />
    </mesh>
  );
}
