import { type FunctionComponent } from "react";
import { Layout } from "src/components/Layout";
import { Window } from "src/components/Window";

export const NotFound: FunctionComponent = () => {
  return (
    <Layout>
      <title>Website | Not Found</title>
      <Window className="p-4 max-w-120 m-4">
        <h1 className="text-3xl font-bold">404</h1>
        <h2 className="text-xl font-bold">Oops! Page Not Found</h2>
        <br />
        <p>
          It seems that the page you're looking for has wandered off into the
          digital abyss. Don't worry; it happens to the best of us! Whether the
          link is broken or the page has been moved, we're here to help you find
          your way. You can return to our homepage or use the navigation menu to
          explore other sections of our site. If you need further assistance,
          feel free to reach out to our support team. Let's get you back on
          track!
        </p>
      </Window>
    </Layout>
  );
};
