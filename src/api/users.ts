import BaseApi from "./base";
import { User } from "../../types/user";

class UsersApi extends BaseApi {
  async getUsers() {
    try {
      const { data } = await this.requestGet(`/users`);
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async addUser(name: string) {
    try {
      const { data } = await this.requestPost(`/user`, { name });
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async updateUser(user: User) {
    try {
      const { data } = await this.requestPatch(`/user/${user.id}`, user);
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async deleteUser(id: string) {
    try {
      await this.requestDelete(`/user/${id}`);
    } catch (err) {
      throw this.handleError(err);
    }
  }
}

export default new UsersApi();
