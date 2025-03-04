import { type FunctionComponent } from "react";
import { Layout } from "src/components/Layout";
import { Window } from "src/components/Window";

export const Home: FunctionComponent = () => {
  return (
    <Layout>
      <title>Website | Login</title>
      <Window>
        <h1>Login</h1>
      </Window>
    </Layout>
  );
};
