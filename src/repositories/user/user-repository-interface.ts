export interface UserRepositoryInterface {
    createUser({ name, avatar, banner, discord }: IUser): Promise<void>
    findManyUserAds(userId: string): Promise<IAd[]>
    deleteUserAd(adId: string): Promise<void>
}
