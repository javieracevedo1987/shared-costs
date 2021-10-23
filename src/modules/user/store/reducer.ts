import produce from 'immer'
import { USER_ACTIONS } from './actions'

const initialState: IUserState = {
  user: null,
  selectedGroup: 0,
  error: '',
}

export const userReducer = produce(
  (draft: IUserState = initialState, { type, payload }) => {
    switch (type) {
      case USER_ACTIONS.REMOVE_USER: {
        draft.user = null
        return draft
      }
      case USER_ACTIONS.LOGIN_USER_SUCCESS: {
        draft.user = payload
        return draft
      }
      default: {
        return draft
      }
    }
  }
)
