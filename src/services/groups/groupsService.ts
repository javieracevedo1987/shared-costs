import { API } from '../api'

export const addGroup = async (group: string) => {
  try {
    const groupAdded: IGroup = await API.post('/groups', { name: group })
    const userGroup: IUserGroup = await API.post('/usergroup', {
      userID: 1,
      groupID: groupAdded.id,
    })
    return userGroup
  } catch (error) {
    console.error(error)
  }
}

export const getGroups = async (user: IUser): Promise<IGroup[] | undefined> => {
  try {
    const userGroups: IUserGroup[] = await API.get(
      `/usergroup?userID=${user.id}`
    )
    const groups: IGroup[] = await API.get('/groups')
    const userGroupMatch: IGroup[] = userGroups.reduce((acc, val) => {
      const hasGroup = groups.find((group) => group.id === val.groupID)

      if (hasGroup) {
        acc.push(hasGroup as never)
      }

      return acc
    }, [])
    return userGroupMatch
  } catch (error) {
    console.error(error)
  }
}

export const addExpense = async (expense: IExpense) => {
  try {
    return await API.post('/expenses', expense)
  } catch (error) {
    console.error(error)
  }
}

export const getExpenses = async (
  groupID: number,
  userID: number
): Promise<IExpense[] | undefined> => {
  try {
    return await API.get(`/expenses?groupID=${groupID}&userID=${userID}`)
  } catch (error) {
    console.error(error)
  }
}
