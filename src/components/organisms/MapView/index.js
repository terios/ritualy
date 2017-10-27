import React, { Component } from 'react'
import { compose, withProps } from "recompose"
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { withScriptjs, GoogleMap, Marker, withGoogleMap } from "react-google-maps"

const Wrapper = styled.div`
`

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)


class MapView extends Component {

  render(){
    return(
      <Wrapper>
        <MyMapComponent isMarkerShown />
      </Wrapper>
    )
  }
}

export default MapView
