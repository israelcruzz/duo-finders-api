import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";

interface GetUserAdsUseCaseRequest {
    userId: string
}

export class GetUserAdsUseCase {
  constructor(private adRepositorie: AdRepositoryInterface) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({ userId }: GetUserAdsUseCaseRequest) {
    const userAds = await this.adRepositorie.findManyUserAds(userId)

    return userAds
  }
}
