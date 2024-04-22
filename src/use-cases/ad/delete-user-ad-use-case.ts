import { AdRepositoryInterface } from "../../repositories/ad/ad-repository-interface";

interface DeleteUserAdUseCaseRequest {
  adId: string;
}

export class DeleteUserAdUseCase {
  constructor(private adRepositorie: AdRepositoryInterface) {
    this.adRepositorie = adRepositorie;
  }

  public async execute({ adId }: DeleteUserAdUseCaseRequest) {
    const discordName = await this.adRepositorie.deleteUserAd(adId);

    return {
      message: "Success!",
    };
  }
}