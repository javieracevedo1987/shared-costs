import { API } from '../api'

export const sendGroup = async (group: string) => {
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

export const fetchGroups = async () => await API.get('/groups')
