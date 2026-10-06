import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { SRGBColorSpace } from "three";
import posterConfig from "./posterConfig";

export default function ImagePoster({ poster, bodyRadius }) {
  const { position, width, path } = poster;

  // load the texture
  const gl = useThree(state => state.gl);
  const texture = useTexture(path, (t) => {
    t.colorSpace = SRGBColorSpace;
    t.anisotropy = gl.capabilities.getMaxAnisotropy();
  });

  // calculate the geometry's dimensions
  const thetaLength = width / bodyRadius;
  const radialSegments = Math.max(
    Math.ceil(thetaLength * posterConfig.imageRadialSegmentsPerRadian),
    posterConfig.imageRadialSegmentsMin,
  );
  const radius = bodyRadius + posterConfig.radiusOffset;
  const height = (width * texture.height) / texture.width;

  return (
    <group rotation-y={position.angle} position-y={position.y}>
      <mesh>
        <cylinderGeometry args={[radius, radius, height, radialSegments, 1, true, -thetaLength / 2, thetaLength]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
}
