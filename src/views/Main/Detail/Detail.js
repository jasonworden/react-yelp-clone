import React, { PropTypes as T } from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {fetchPlaceDetails} from 'actions/actions'
// import {getDetails} from 'utils/googleApiHelpers'

import styles from './styles.module.css'

class Detail extends React.Component {
  static childContextTypes = {
    router: T.object,
  }

  componentDidMount() {
    if (this.props.map) {
      this.getDetails(this.props.map)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.map &&
        (prevProps.map !== this.props.map ||
         prevProps.params.placeId !== this.props.params.placeId)) {
      this.getDetails(this.props.map);
    }
  }

  renderPhotos(place) {
    if (!place.photos || place.photos.length == 0) return;

    const cfg = {maxWidth: 100, maxHeight: 100}
    return (<div className={styles.photoStrip}>
      {place.photos.map(p => {
        const url = `${p.getUrl(cfg)}.png`
        return (<img key={url} src={url} />)
      })}
    </div>)
  }

  getDetails(map) {
    const {google, params} = this.props;
    const {placeId} = params;

    this.props.fetchPlaceDetails(google, map, placeId);
  }

  render() {
    if (this.props.loading) {
      return (<div className={styles.wrapper}>
        Loading...
      </div>)
    }

    const {place} = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>{place.name}</h2>
        </div>
        <div className={styles.details}>
          {this.renderPhotos(place)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.places.detail
}

export default connect(mapStateToProps, {fetchPlaceDetails})(Detail)
