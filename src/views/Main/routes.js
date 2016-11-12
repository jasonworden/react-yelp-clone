import React from 'react'
import {Route, IndexRoute} from 'react-router'
import MapsContainer from './MapsContainer'

import Map from './Map/Map'
import Detail from './Detail/Detail'

export const mainRoutes = (
  <Route path="/" component={MapsContainer}>
    <IndexRoute component={Map} />

    <Route path="map" component={Map}>
      <Route path="detail/:placeId" component={Detail} />
    </Route>
  </Route>
)

export default mainRoutes
