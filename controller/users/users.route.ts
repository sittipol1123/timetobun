import Elysia from "elysia";
import { UserController } from "./users.controller";

const Usersroute = new Elysia().group("/users", (app) =>
  app
    .get("/", () => {
      return { message: "this is a users page" };
    })
    .post("/", ({ body }) => {
      console.log(body);
    })
);

export default Usersroute;
