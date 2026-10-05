import Column from "./column/Column";
import Content from "./content/Content";
import Camera from "./scene/Camera";
import Controls from "./scene/Controls";
import Lights from "./scene/Lights";
import Shadows from "./scene/Shadows";

export default function Experience() {
  return (
    <>
      <color args={["ivory"]} attach="background" />
      <Camera />
      <Lights />
      <Shadows />

      <Controls>
        <Column />
        <Content />
      </Controls>
    </>
  );
}
