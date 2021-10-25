import { render } from '../../../../utils/test-utils'
import { RegisterForm } from './RegisterForm'

describe('Register Form', () => {
  it('Check form', () => {
    const { getByPlaceholderText, getByText } = render(<RegisterForm />)

    expect(getByPlaceholderText('Username')).toBeInTheDocument()
    expect(getByPlaceholderText('Password')).toBeInTheDocument()
    expect(getByPlaceholderText('Password confirm')).toBeInTheDocument()
    expect(getByText('REGISTER!')).toBeInTheDocument()
  })
})
