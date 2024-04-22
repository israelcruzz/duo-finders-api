export interface UserRepositoryInterface {
  createUser({ name, avatar, banner, discord }: IUser): Promise<IUser>;
  findUserById(userId: string): Promise<IUser | null>;
}
