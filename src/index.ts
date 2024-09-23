import { Elysia, t } from "elysia";
import test from "../controller/testcontroller";
import { userRoute } from "../controller/users";
const app = new Elysia()
  .use(test)
  .use(userRoute)
  .get("/", () => "Hello Elysia")
  .get("/test", () => {
    return { message: "test" };
  })
  .onError((context) => {
    console.error("Global Error:", context.error);
    return {
      status: "error",
      message: context.error.message || "An unexpected error occurred.",
    };
  })
  .post(
    "/create",
    async (context) => {
      const { body } = context;

      if (!body.name || !body.email) {
        throw new Error("Missing required fields: name or email");
      }

      return {
        status: "success",
        message: "Resource created successfully",
        data: body,
      };
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
      }),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
