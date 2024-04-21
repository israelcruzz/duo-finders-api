import { prisma } from "../../../lib/prisma";
import { CategoryRepositoryInterface } from "../category-repository-interface";

class CategoryPrismaRepositorie implements CategoryRepositoryInterface {
  public async index(): Promise<ICategory[]> {
    const categories = await prisma.category.findMany();

    return categories;
  }
}

export default new CategoryPrismaRepositorie();
