import { sendGroup } from '../../../services/groups/groupsService'

export const GROUP_ACTIONS = {
  ADD_GROUP: 'ADD_GROUP',
  ADD_GROUP_FAILURE: 'ADD_GROUP_FAILURE',
  GET_GROUPS: 'GET_GROUPS',
  GET_GROUPS_SUCCESS: 'GET_GROUPS_SUCCESS',
  GET_GROUPS_FAILURE: 'GET_GROUPS_FAILURE',
}

// Actions

export const addGroup = (group: string): ActionPayload => ({
  type: GROUP_ACTIONS.ADD_GROUP,
  payload: group,
})

export const getGroups = (): ActionPayload => ({
  type: GROUP_ACTIONS.GET_GROUPS,
})

export const getGroupsSuccess = (groups: IGroup[]): ActionPayload => ({
  type: GROUP_ACTIONS.GET_GROUPS,
  payload: groups,
})

export const getGroupsFailure = (error: any): ActionPayload => ({
  type: GROUP_ACTIONS.GET_GROUPS,
  payload: error,
})

// Async methods

export const addGroupAsync = (group: string) => (dispatch: any) => {
  return sendGroup(group)
    .then(() => {
      dispatch(getGroups())
      console.log('GRUPO CREADO !!!')
    })
    .catch((error) => {
      console.log('ERROR CREANDO EL GRUPO')
    })
}
