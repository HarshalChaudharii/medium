import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRETE: string;
  };
}>();
app.use("/*", cors());
/*
  If u're using Node.js based edge environment, that the pooled connection will work fine with neon.db pool url

  If u're using different js runtime (similar to AWS Lambda/Cloudeflare workers) is when neon.db pooled connection might not work

  the pooled connection that u get from neon.db does not have bunch of prisma dependencies that the pisma pooled connection does
*/

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
