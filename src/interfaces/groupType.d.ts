interface IGroupState {
  selectedGroup: number | null
  error: any
  groups: Group[]
}

interface IGroup {
  id: number
  name: string
}

interface IUserGroup {
  userID: string
  groupID: string
}
