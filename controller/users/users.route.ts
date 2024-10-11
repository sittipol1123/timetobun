import Elysia from "elysia";
import { UserController } from "./users.controller";
const users = new UserController();

const Usersroute = new Elysia().group("/users", (app) =>
  app
    .get("/", () => {
      return { message: "this is a users page" };
    })
    .post("/", async ({ body }) => {
      var result: boolean = await users.store(body);
      var msg = { message: "error" };
      if (result) {
        msg = { message: "success" };
      }
      return msg;
    })
    .get("/:id", async ({ params: { id } }) => {
      var result = await users.find(id);
      if (result) {
        return result;
      }
    })
    .delete("/", async ({ params: { id } }) => {
      if (await users.delete(id)) {
        return { message: "success" };
      }
    })
);

export default Usersroute;
