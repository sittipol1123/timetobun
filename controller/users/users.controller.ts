import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class UserController {
  async index(data: any) {
    console.log(data);
    return { data };
  }

  async store(data: any) {
    try {
      await prisma.user.create({
        data: {
          username: data.username,
          password: data.password,
          fname: data.firstname,
          lname: data.lastname,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async find(id: string) {
    try {
      const response = await prisma.user.findFirst({
        where: {
          id: Number(id),
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async update(id: string, data: any) {
    try {
      await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: {
          username: data.username,
          updated_at: new Date(),
        },
      });
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id: string) {
    try {
      await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
