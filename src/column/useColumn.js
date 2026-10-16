import { useControls } from "leva";
import column from "./columnConfig";

export default function useColumn() {
  const bodyLive = useControls("Column body", {
    radius: { value: column.body.radius, min: 1, max: 2, step: 0.1 },
    height: { value: column.body.height, min: 2, max: 4, step: 0.1 },
  });

  const baseLive = useControls("Column base", {
    radius: { value: column.base.radius, min: 1, max: 2, step: 0.1 },
    height: { value: column.base.height, min: 0.1, max: 1, step: 0.1 },
  });

  const capLive = useControls("Column cap", {
    radius: { value: column.cap.radius, min: 1, max: 2, step: 0.1 },
    height: { value: column.cap.height, min: 0.1, max: 1, step: 0.1 },
  });

  const body = {
    ...column.body,
    ...bodyLive,
  };

  const base = {
    ...column.base,
    ...baseLive,
  };

  const cap = {
    ...column.cap,
    ...capLive,
  };

  return {
    // default
    ...column,
    // live (leva)
    body,
    base,
    cap,
    // derived
    bottomY: -body.height / 2 - base.height,
  };
}
