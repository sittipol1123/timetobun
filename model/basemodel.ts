import { t } from "elysia";

export const Users = t.Object({
  name: t.String(),
  email: t.String({ format: "email" }),
});

export const Department = t.Object({
  id: t.String({ format: "uuid" }),
  name: t.String(),
  created_at: t.Date(),
  updated_at: t.Date(),
});
