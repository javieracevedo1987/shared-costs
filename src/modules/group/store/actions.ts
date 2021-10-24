import { addGroup, getGroups } from '../../../services/groups/groupsService'

export const GROUP_ACTIONS = {
  ADD_GROUP_FAILURE: 'ADD_GROUP_FAILURE',
  GET_GROUPS_SUCCESS: 'GET_GROUPS_SUCCESS',
  GET_GROUPS_FAILURE: 'GET_GROUPS_FAILURE',
}

// Actions

export const getGroupsSuccess = (groups: IGroup[]): ActionPayload => ({
  type: GROUP_ACTIONS.GET_GROUPS_SUCCESS,
  payload: groups,
})

export const getGroupsFailure = (error: any): ActionPayload => ({
  type: GROUP_ACTIONS.GET_GROUPS_FAILURE,
  payload: error,
})

// Async methods

export const getGroupsAsync = (user: IUser) => (dispatch: any) => {
  return getGroups(user).then((groups) => {
    dispatch(getGroupsSuccess(groups as IGroup[]))
  })
}

export const addGroupAsync =
  (group: string, user: IUser) => (dispatch: any) => {
    return addGroup(group)
      .then(() => {
        dispatch(getGroupsAsync(user))
      })
      .catch((error) => {
        console.log('ERROR CREANDO EL GRUPO')
      })
  }
