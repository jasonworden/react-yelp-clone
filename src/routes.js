import React from 'react'
import {Route} from 'react-router'

import mainRoutes from './views/Main/routes'

export const routes = (
  <Route path=''>
    {mainRoutes}
  </Route>
)

export default routes
