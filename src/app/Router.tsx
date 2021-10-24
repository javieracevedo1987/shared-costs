import { Switch, Route, Redirect } from 'react-router-dom'
import { Menu } from '../shared/layout/Menu'
import { Login } from '../modules/user/containers/Login'
import { GroupDetail } from '../modules/group/containers/GroupDetail'
import { Groups } from '../modules/group/containers/Groups/Groups'
import useAuth from '../hooks/useAuth'

export const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Menu>
        <Switch>
          <Redirect exact from="/" to="/groups" />
          <PrivateRoute exact path="/groups" component={Groups} />
          <PrivateRoute path="/groups/:id" component={GroupDetail} />
          <PrivateRoute path="*" component={() => <h1>NOT FOUND!!!</h1>} />
        </Switch>
      </Menu>
    </Switch>
  )
}

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const { getUser: isAuth } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}
