import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { googleMaps } from 'config'
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps'

const Wrapper = styled.div`
`

const MyMapComponent = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  (<GoogleMap
    defaultZoom={14}
    defaultCenter={props.bounds.center}
  >
    {
      props.places.map(place => (
        <Marker
          key={place.venue.id}
          position={{ lat: place.venue.location.lat, lng: place.venue.location.lng }}
        />
      ))
    }
  </GoogleMap>)
)


class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.getMapDimensions(),
    }
  }
  getMapDimensions() {
    const height = window.innerHeight - 64
    const width = window.innerWidth
    return { height, width }
  }
  componentWillMount() {
    console.log('Map about to be mounted')
  }
  render() {
    const { height } = this.state
    return (
      <Wrapper>
        <MyMapComponent
          bounds={this.props.bounds}
          places={this.props.items}
          googleMapURL={googleMaps.url}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </Wrapper>
    )
  }
}

export default MapView
