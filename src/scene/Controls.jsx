import { PresentationControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Controls({ children }) {
  // shrink the content on narrow viewports (portrait) so it never exceeds the visible width
  const { designWidth } = useControls("Layout", { designWidth: { value: 7, min: 1, max: 10, step: 0.1 } });
  const viewportWidth = useThree((state) => state.viewport.width);
  const contentScale = Math.min(1, viewportWidth / designWidth);

  return (
    <PresentationControls global damping={0.1} polar={[0, 0]}>
      <group scale={contentScale}>{children}</group>
    </PresentationControls>
  );
}
