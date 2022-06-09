import { Route, Switch } from 'react-router-dom'
import { Home } from '../Home'
import { Page404 } from '../Page404'
import { Page1Routes } from './Page1Routes'
import { Page2Routes } from './Page2Routes'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {/* {console.log(url)} */}
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => {
          return (
            <Switch>
              {Page2Routes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                )
              })}
            </Switch>
          )
        }}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
}
