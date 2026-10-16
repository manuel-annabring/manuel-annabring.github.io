import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useMemo } from "react";
import { MathUtils, RepeatWrapping, SRGBColorSpace, Vector2 } from "three";
import posterConfig from "./posterConfig";
import useLink from "./useLink";

export default function ImagePoster({ poster, radius, normalMapTexture }) {
  const { id, position, width, path, layer = 1, url } = poster;

  const { onClick, onPointerOver, onPointerOut } = useLink(url);

  const { normalScale, normalMapTileSize } = useControls("ImagePoster", {
    normalScale: { value: 1.5, min: 0, max: 10, step: 0.01 },
    normalMapTileSize: { value: 1, min: 0.05, max: 4, step: 0.1 },
  });

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

  // prepare normal map based on poster dimensions
  const normalMapTextureClone = useMemo(() => {
    const clone = normalMapTexture.clone();
    clone.wrapS = RepeatWrapping;
    clone.wrapT = RepeatWrapping;
    clone.needsUpdate = true;
    const seed = id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
    clone.offset.x = MathUtils.seededRandom(seed);
    clone.offset.y = MathUtils.seededRandom(seed + 1);

    return clone;
  }, [normalMapTexture, id]);
  normalMapTextureClone.repeat.x = width / normalMapTileSize;
  normalMapTextureClone.repeat.y = height / normalMapTileSize;

  return (
    <group rotation-y={position.angle} position-y={position.y}>
      <mesh onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
        <cylinderGeometry args={[radius, radius, height, radialSegments, 1, true, -thetaLength / 2, thetaLength]} />
        <meshStandardMaterial
          map={texture}
          normalMap={normalMapTextureClone}
          normalScale={new Vector2(normalScale, normalScale)}
        />
      </mesh>
    </group>
  );
}
