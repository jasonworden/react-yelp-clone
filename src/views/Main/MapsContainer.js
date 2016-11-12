import React, { Component, PropTypes as T } from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'

import styles from './styles.module.css'

class MapsContainer extends Component {
  onReady(mapProps, map) {
    const params = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    };
    this.props.fetchNearbyPlaces(this.props.google, map, params);
  }

  onMapMove() {}

  onMarkerClick(item) {
    const {push} = this.context.router;
    const {place} = item;
    push(`/map/detail/${place.place_id}`)
  }

  render() {
    const {props, context} = this;
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        google: props.google,
        places: props.places,
        loaded: props.loaded,
        router: context.router,
        onMove: this.onMapMove.bind(this),
        onMarkerClick: this.onMarkerClick.bind(this),
        zoom: this.props.zoom
      })
    }

    return (
      <Map
        google={props.google}
        onReady={this.onReady.bind(this)}
        visible={false}
        className={styles.wrapper}
      >
        <Header />

        <Sidebar
          title={'Restaurants'}
          onListItemClick={this.onMarkerClick.bind(this)}
          places={props.places} />

        <div className={styles.content}>
          {children}
        </div>
      </Map>
    )
  }
}

MapsContainer.contextTypes = {
  router: T.object
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(MapsContainer)
