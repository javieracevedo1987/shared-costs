import produce from 'immer'

export interface IUserState {
  user: string
  selectedGroup: number
}

const initialState: IUserState = {
  user: '',
  selectedGroup: 0,
}

export const userReducer = produce(
  (draft = initialState, { type, payload }) => {
    switch (type) {
      default: {
        return draft
      }
    }
  }
)
