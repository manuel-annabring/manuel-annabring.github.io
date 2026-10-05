import { useControls } from "leva";
import column from "./columnConfig";

export default function useColumn() {
  const { radius, height } = useControls("Column", {
    radius: { value: column.radius, min: 1, max: 2, step: 0.1 },
    height: { value: column.height, min: 2, max: 4, step: 0.1 },
  });

  return {
    // default
    ...column,
    // live (leva)
    radius,
    height,
    // derived
    bottomY: -height / 2,
  };
}
