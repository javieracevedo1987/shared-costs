import { render } from '../../../utils/test-utils'
import { Login } from './Login'

describe('Login component', () => {
  it('Check toggle login to register form', () => {
    const { getByText } = render(<Login />)
    const registerToggle = getByText('Register')

    registerToggle.click()

    expect(getByText('REGISTER!')).toBeInTheDocument()
  })

  it('Check toggle register to login form', () => {
    const { getByText } = render(<Login />)
    const registerToggle = getByText('Register')

    registerToggle.click()

    const loginToggle = getByText('Login')

    loginToggle.click()

    expect(getByText('LOGIN!')).toBeInTheDocument()
  })
})
