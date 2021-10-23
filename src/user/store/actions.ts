import { loginUser } from '../../services/users/userService'

export const USER_ACTIONS = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',
}

export function loginUserSuccess(user: IUser) {
  return {
    type: USER_ACTIONS.LOGIN_USER_SUCCESS,
    payload: user,
  }
}

export function loginUserFailure(error: string) {
  return {
    type: USER_ACTIONS.LOGIN_USER_FAILURE,
    payload: error,
  }
}

export const loginUserAsync = (user: IUser) => {
  return (dispatch: any) => {
    loginUser(user)
      .then((user) => {
        dispatch(loginUserSuccess(user))
      })
      .catch((err) => {
        dispatch(loginUserFailure(err))
      })
  }
}
