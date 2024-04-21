import { CategoryRepositoryInterface } from "../category-repository-interface";

class CategoryInMemoryRepositorie implements CategoryRepositoryInterface {
  public categories: ICategory[] = [];

  public async index(): Promise<ICategory[]> {
    const categories = this.categories;

    return categories;
  }
}

export default new CategoryInMemoryRepositorie();