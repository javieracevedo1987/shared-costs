interface IGroupState {
  selectedGroup: number | null
  error: any
  groups: IGroup[]
  expenses: IExpense[]
}

interface IGroup {
  id: number
  name: string
}

interface IUserGroup {
  id?: number
  userID: number
  groupID: number
}
