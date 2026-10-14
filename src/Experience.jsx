import Column from "./column/Column";
import Content from "./content/Content";
import Controls from "./scene/Controls";
import Layout from "./scene/Layout";
import Lights from "./scene/Lights";
import Shadows from "./scene/Shadows";
import useIntroCamera from "./scene/useIntroCamera";

export default function Experience() {
  const introIsFinished = useIntroCamera();

  return (
    <>
      <color args={["ivory"]} attach="background" />
      <Lights />
      {introIsFinished && <Controls />}

      <Layout>
        <Column />
        <Content />
        <Shadows />
      </Layout>
    </>
  );
}
