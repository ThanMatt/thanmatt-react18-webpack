import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const req = require.context('./pages', true, /route\.js$/)
let routes = []

req.keys().forEach((key) => {
  routes = routes.concat(req(key).default)
})

const Router = () => {
  return (
    <Routes>
      {routes.map(({ element, title, ...route }, index) => {
        return (
          <Route
            key={index}
            {...route}
            element={
              <>
                <Helmet>
                  <title>{title}</title>
                </Helmet>
                {element}
              </>
            }
          />
        )
      })}
    </Routes>
  )
}

export default Router
