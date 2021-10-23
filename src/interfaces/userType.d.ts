interface IUser {
  id?: number
  username: string
  password: string
}

interface IUserState {
  user: IUser | null
  selectedGroup: number
  error: string
}
