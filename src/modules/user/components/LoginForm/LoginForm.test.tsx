import { render } from '../../../../utils/test-utils'
import { LoginForm } from './LoginForm'

describe('Login Form', () => {
  it('Check form', () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />)

    expect(getByPlaceholderText('Username')).toBeInTheDocument()
    expect(getByPlaceholderText('Password')).toBeInTheDocument()
    expect(getByText('LOGIN!')).toBeInTheDocument()
  })
})
