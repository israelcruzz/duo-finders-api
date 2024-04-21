import { UserRepositoryInterface } from "../user-repository-interface";

class UserInMemoryRepositorie implements UserRepositoryInterface {
  public users: IUser[] = [];

  public async createUser({
    name,
    avatar,
    banner,
    discord,
  }: IUser): Promise<IUser> {
    const createUser = {
      name,
      avatar,
      banner,
      discord,
    };

    this.users.push(createUser);

    return createUser;
  }
}

export default new UserInMemoryRepositorie();
