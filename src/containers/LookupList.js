import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fetchPlacesAsync, switchDisplay } from 'store/actions'
import { fromFood, fromUi } from 'store/selectors'
import { GeoLocationHOC, ListItems, MapView, FloatingButton } from 'components'


const Wrapper = styled.div`
  width: 100%;
  @media (min-width : 1224px) {
    width: calc(100% - 320px);
  }
`
class LookupListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      changeDisplayTo: props.displayMode === 'list' ? 'map' : 'list',
    }
    this.handleDisplayChange = this.handleDisplayChange.bind(this)
  }
  handleDisplayChange() {
    this.setState({ changeDisplayTo: this.props.displayMode })
    const newDisplayMode = this.props.displayMode === 'list' ? 'map' : 'list'
    this.props.switchDisplay(newDisplayMode)
  }

  render() {
    const { loading, places, displayMode, bounds, coords } = this.props
    const { changeDisplayTo } = this.state
    
    return (
      <Wrapper>
        { displayMode === 'list' && (
          <ListItems items={places} loading={loading} />
            )
          }
        { displayMode === 'map' && (
          <MapView items={places} bounds={bounds} position={coords} />
            )
          }
        <FloatingButton onClick={this.handleDisplayChange} icon={changeDisplayTo} />
      </Wrapper>
    )
  }
}

LookupListContainer.propTypes = {
  places: PropTypes.array,
  loading: PropTypes.bool,
}

const mapStateToProps = state => ({
  places: fromFood.getPlaces(state),
  bounds: fromFood.getBounds(state),
  displayMode: fromUi.getDisplayMode(state),
  loading: isPending(state, 'fetchPlaces'),
  failed: hasFailed(state, 'fetchPlaces'),
})

const mapDispatchToProps = dispatch => ({
  switchDisplay: displayMode => dispatch(switchDisplay(displayMode)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  GeoLocationHOC({}),
)(LookupListContainer)