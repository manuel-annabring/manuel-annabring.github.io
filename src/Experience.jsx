import Content from "./Content";
import Camera from "./scene/Camera";
import Lights from "./scene/Lights";
import Shadows from "./scene/Shadows";

export default function Experience() {
  return (
    <>
      {/* Scene */}
      <color args={["ivory"]} attach="background" />
      <Camera />
      <Lights />
      <Shadows />

      {/* Content */}
      <Content />
    </>
  );
}
