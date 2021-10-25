import {
  addExpense,
  addGroup,
  getExpenses,
  getGroups,
} from '../../../services/groups/groupsService'

export const GROUP_ACTIONS = {
  ADD_GROUP_FAILURE: 'ADD_GROUP_FAILURE',
  GET_GROUPS_SUCCESS: 'GET_GROUPS_SUCCESS',
  GET_GROUPS_FAILURE: 'GET_GROUPS_FAILURE',
  GET_EXPENSES_SUCCESS: 'GET_EXPENSES_SUCCESS',
  GET_EXPENSES_FAILURE: 'GET_EXPENSES_FAILURE',
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

export const getExpensesSuccess = (expenses: IExpense[]): ActionPayload => ({
  type: GROUP_ACTIONS.GET_EXPENSES_SUCCESS,
  payload: expenses,
})

export const getExpensesFailure = (error: any): ActionPayload => ({
  type: GROUP_ACTIONS.GET_EXPENSES_FAILURE,
  payload: error,
})

// Async methods

export const getGroupsAsync = (user: IUser) => (dispatch: any) => {
  return getGroups(user)
    .then((groups) => {
      dispatch(getGroupsSuccess(groups as IGroup[]))
    })
    .catch((err) => {
      dispatch(getGroupsFailure(err))
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

export const addExpenseAsync = (expense: IExpense) => (dispatch: any) => {
  return addExpense(expense).then((res) => {
    const { groupID, userID } = expense
    dispatch(getExpensesAsync(groupID, userID))
  })
}

export const getExpensesAsync =
  (groupID: number, userID: number) => (dispatch: any) => {
    return getExpenses(groupID, userID)
      .then((expenses) => {
        dispatch(getExpensesSuccess(expenses as IExpense[]))
      })
      .catch((err) => {
        dispatch(getExpensesFailure(err))
      })
  }
