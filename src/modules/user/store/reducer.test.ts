import { loginUserSuccess, removeUser } from './actions'
import { userReducer } from './reducer'

const initialState: IUserState = {
  user: null,
  error: '',
}

describe('User reducer', () => {
  beforeEach(() => {
    userReducer(initialState, {})
  })

  it('Check remove user state', () => {
    const actualState: IUserState = {
      user: { id: 1, username: 'Javier' },
      error: '',
    }

    const actual = userReducer(actualState, removeUser())

    expect(actual?.user).toBeNull()
  })

  it('login success', () => {
    const actual = userReducer(
      initialState,
      loginUserSuccess({ id: 1, username: 'Javier' })
    )

    expect(actual?.user).toEqual({ id: 1, username: 'Javier' })
  })
})
