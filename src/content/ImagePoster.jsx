import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { SRGBColorSpace } from "three";
import posterConfig from "./posterConfig";
import useLink from "./useLink";

export default function ImagePoster({ poster, radius }) {
  const { position, width, path, layer = 1, url } = poster;

  const { onClick, onPointerOver, onPointerOut } = useLink(url);

  // load the texture
  const gl = useThree((state) => state.gl);
  const texture = useTexture(path, (t) => {
    t.colorSpace = SRGBColorSpace;
    t.anisotropy = gl.capabilities.getMaxAnisotropy();
  });

  // calculate the geometry's dimensions
  const thetaLength = width / radius;
  const radialSegments = Math.max(
    Math.ceil(thetaLength * posterConfig.imageRadialSegmentsPerRadian),
    posterConfig.imageRadialSegmentsMin,
  );
  const height = (width * texture.height) / texture.width;

  return (
    <group rotation-y={position.angle} position-y={position.y}>
      <mesh onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
        <cylinderGeometry args={[radius, radius, height, radialSegments, 1, true, -thetaLength / 2, thetaLength]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}
