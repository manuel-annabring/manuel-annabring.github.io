import { Box, Float, PresentationControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Content() {
  // shrink the content on narrow viewports (portrait) so it never exceeds the visible width
  const { designWidth } = useControls("Layout", { designWidth: { value: 3, min: 1, max: 10, step: 0.1 } });
  const viewportWidth = useThree((state) => state.viewport.width);
  const contentScale = Math.min(1, viewportWidth / designWidth);

  return (
    <PresentationControls global>
      <group scale={contentScale}>
        <Float>
          <Box>
            <meshStandardMaterial color="tomato" />
          </Box>
        </Float>
      </group>
    </PresentationControls>
  );
}
