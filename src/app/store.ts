import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userReducer } from '../user/store/reducer'

export const store = createStore(
  combineReducers({ user: userReducer }),
  composeWithDevTools(applyMiddleware(thunk))
)

export interface RootState {
  user: IUserState
}
