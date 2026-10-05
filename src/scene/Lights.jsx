export default function Lights() {
  return (
    <>
      <directionalLight position={[5, 2, 4]} intensity={8} />
      <ambientLight intensity={1.5} />
    </>
  );
}
