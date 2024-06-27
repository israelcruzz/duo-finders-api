interface IUser {
    id?: string
    name: string
    avatar: string
    banner: string
    discord: string
    role?: "Member" | "Admin"
    ads?: IAd[]
}