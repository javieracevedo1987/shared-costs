import produce from 'immer'
import { GROUP_ACTIONS } from './actions'

const initialState: IGroupState = {
  selectedGroup: null,
  error: null,
  groups: [],
  expenses: [],
}

export const groupReducer = produce(
  (draft: IGroupState = initialState, { type, payload }) => {
    switch (type) {
      case GROUP_ACTIONS.GET_GROUPS_SUCCESS: {
        draft.groups = payload
        return draft
      }
      case GROUP_ACTIONS.GET_EXPENSES_SUCCESS: {
        draft.expenses = payload
        return draft
      }
      default: {
        return draft
      }
    }
  }
)
