import { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Menu } from '../shared/layout/Menu'
import { Login } from '../user/containers/Login'
import { GroupDetail } from '../group/containers/GroupDetail'
import { Groups } from '../group/containers/Groups'

export const Router = () => {
  const history = useHistory()
  const isAuth = false

  useEffect(() => {
    if (!isAuth) {
      history.push('/login')
    }
  }, [history, isAuth])

  return isAuth ? (
    <Switch>
      <Menu>
        <Switch>
          <Route exact path="/groups" component={Groups} />
          <Route path="/groups/:id" component={GroupDetail} />
          <Route path="*" component={() => <h1>NOT FOUND!!!</h1>} />
        </Switch>
      </Menu>
      <Route path="/login" component={Login} />
    </Switch>
  ) : (
    <Login />
  )
}
