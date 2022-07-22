import { useRoutes, Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const req = require.context('./pages', true, /route\.js$/)
let routes = []

req.keys().forEach((key) => {
  routes = routes.concat(req(key).default)
})

const Router = () => {
  const elements = useRoutes(
    routes.map(({ element, title, ...route }) => {
      return {
        ...route,
        element: (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            {element}
            {!!route.children?.length && <Outlet />}
          </>
        )
      }
    })
  )
  return elements
}

export default Router
