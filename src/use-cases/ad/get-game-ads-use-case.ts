import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";

interface GetGameAdsUseCaseRequest {
    gameId: string
    page: number
}

export class GetGameAdsUseCase {
  constructor(private adRepositorie: AdRepositoryInterface) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({ gameId, page }: GetGameAdsUseCaseRequest) {
    const recentAds = await this.adRepositorie.findManyGameAds(gameId, page)

    return recentAds
  }
}
