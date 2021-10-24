import produce from 'immer'
import { GROUP_ACTIONS } from './actions'

const initialState: IGroupState = {
  selectedGroup: null,
  error: null,
  groups: [],
}

export const userReducer = produce(
  (draft: IGroupState = initialState, { type, payload }) => {
    switch (type) {
      default: {
        return draft
      }
    }
  }
)
