import Column from "./column/Column";
import Content from "./content/Content";
import Controls from "./scene/Controls";
import Layout from "./scene/Layout";
import Lights from "./scene/Lights";
import Shadows from "./scene/Shadows";

export default function Experience() {
  return (
    <>
      <color args={["ivory"]} attach="background" />
      <Lights />
      <Controls />

      <Layout>
        <Column />
        <Content />
        <Shadows />
      </Layout>
    </>
  );
}
