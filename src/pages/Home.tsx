import { useState, type FunctionComponent } from "react";
import { Layout } from "src/components/Layout";

export const Home: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const update = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Layout>
      <title>Website | Home</title>
      <h1>Home Page</h1>
      <p>Counter: {count}</p>
      <button onClick={() => update()}>Update</button>
    </Layout>
  );
};
