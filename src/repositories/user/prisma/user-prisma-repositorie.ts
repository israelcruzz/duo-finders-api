import { prisma } from "../../../lib/prisma";
import { UserRepositoryInterface } from "../user-repository-interface";

class UserPrismaRepositorie implements UserRepositoryInterface {
  public async createUser({
    name,
    avatar,
    banner,
    discord,
  }: IUser): Promise<IUser> {
    const user = await prisma.user.create({
      data: {
        name,
        avatar,
        banner,
        discord,
      },
    });

    return user;
  }

  public async deleteUserAd(adId: string): Promise<void> {
    await prisma.ad.delete({
      where: {
        id: adId,
      },
    });
  }

  public async findManyUserAds(userId: string): Promise<IAd[]> {
    const userAds = await prisma.ad.findMany({
      where: {
        userId,
      },
    });

    return userAds;
  }
}

export default new UserPrismaRepositorie();
