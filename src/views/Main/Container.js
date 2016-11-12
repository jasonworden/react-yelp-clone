import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNearbyPlaces, fetchPlaceDetails} from 'actions/actions'

const Container = (props) => (
  <MapsContainer {...props} />
)

const mapStateToProps = state => {
  return {
    places: state.places.all,
    currentPlace: state.places.current
  }
}

export default connect(mapStateToProps, {
  fetchPlaceDetails,
  fetchNearbyPlaces
})(Container)
