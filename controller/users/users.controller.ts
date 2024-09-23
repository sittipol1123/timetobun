export class UserController {
  async index(data: any) {
    console.log(data);
    return { data };
  }

  async store(data: any) {}
  async find(id: string) {}
  async update(data: { id: string; data: any }) {}
  async delete(id: string) {}
}
