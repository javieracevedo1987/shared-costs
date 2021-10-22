import { Switch, Route, Redirect } from 'react-router-dom'
import { Menu } from '../shared/layout/Menu'
import { Login } from '../user/containers/Login'
import { GroupDetail } from '../group/containers/GroupDetail'
import { Groups } from '../group/containers/Groups'

export const Router = () => {
  const isAuth = true

  return isAuth ? (
    <Menu>
      <Switch>
        <Route exact path="/">
          <Redirect to="/groups" />
        </Route>
        <Route exact path="/groups" component={Groups} />
        <Route path="/groups/:id" component={GroupDetail} />
        <Route path="/login" component={Login} />
        <Route path="*" component={() => <h1>NOT FOUND!!!</h1>} />
      </Switch>
    </Menu>
  ) : (
    <Login />
  )
}
