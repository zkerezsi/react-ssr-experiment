import express, { type Request, type Response } from "express";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "./App";

const app = express();
const port = 3000;

app.use("/static", express.static("dist/static"));
app.use(express.static("public"));

app.use((request: Request, response: Response) => {
  const { pipe } = renderToPipeableStream(
    <html lang="en" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body className="h-full">
        <base href="/" />
        <div id="app" className="h-full">
          <StaticRouter location={request.url}>
            <App />
          </StaticRouter>
        </div>
      </body>
    </html>,
    {
      bootstrapModules: ["/static/index.js"],
      onShellReady() {
        response.setHeader("content-type", "text/html");
        pipe(response);
      },
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// TODO: graceful shutdown
