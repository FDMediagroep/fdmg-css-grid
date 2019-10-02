import * as path from "path";
import * as stream from "stream";
import * as React from "react";
import { renderToNodeStream } from "react-dom/server";
import Koa from "koa";
import koaCompress from "koa-compress";
import koaJson from "koa-json";
import mount from "koa-mount";
import Router from "koa-router";
import serve from "koa-static";

import { routes } from "./routes/routes";
import Route from "./components/Route";
import Html from "./components/Html";

const app = new Koa();

// logger
app.use(async (ctx, next) => {
    console.time(`${ctx.method} ${ctx.url}`);
    await next();
    console.timeEnd(`${ctx.method} ${ctx.url}`);
});

// Error logging
app.on("error", (err, ctx) => {
    console.info("server error", err, ctx);
});

app.use(koaCompress());
app.use(koaJson({ pretty: false, param: "pretty" }));

const jsPath = path.join(__dirname, "js");
const cssPath = path.join(__dirname, "css");
const fontsPath = path.join(__dirname, "fonts");
console.info("Koa static serve", jsPath);
console.info("Koa static serve", cssPath);
console.info("Koa static serve", fontsPath);
app.use(mount("/js", serve(jsPath)));
app.use(mount("/css", serve(cssPath)));
app.use(mount("/fonts", serve(fontsPath)));

// Initialize routes.
const router = new Router();
// Register routes.
for (const route of routes) {
    console.info(`Koa route: ${route.path}`);
    router.get(route.path, (ctx, next) => {
        ctx.type = "text/html";
        const bs = new stream.PassThrough();
        const s = renderToNodeStream(
            <Html head={route.head}>
                <Route route={ctx.url} routes={routes} />
            </Html>
        );
        ctx.body = bs;
        bs.push("<!Doctype html>");
        s.pipe(bs);
    });
}

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3008);
