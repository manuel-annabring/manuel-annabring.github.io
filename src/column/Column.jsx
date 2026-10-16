import ColumnBase from "./ColumnBase";
import ColumnBody from "./ColumnBody";
import ColumnCap from "./ColumnCap";

export default function Column() {
  return (
    <group>
      <ColumnCap />
      <ColumnBody />
      <ColumnBase />
    </group>
  );
}
