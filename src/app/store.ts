import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userReducer } from '../modules/user/store/reducer'
import { groupReducer } from '../modules/group/store/reducer'

export const store = createStore(
  combineReducers({ user: userReducer, group: groupReducer }),
  composeWithDevTools(applyMiddleware(thunk))
)
