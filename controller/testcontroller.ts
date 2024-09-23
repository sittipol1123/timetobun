import Elysia from "elysia";

const test = new Elysia().group("/user", (app) =>
  app
    .get("/", () => {
      return { message: "user index page" };
    })
    .post("/", ({ body }) => {
      console.log(body);
    })
    .get("/:id", ({ params: { id } }) => {
      console.log(id);
    })
    .delete("/:id", ({ params: { id } }) => {
      console.log("delete path");
    })
);

export default test;
