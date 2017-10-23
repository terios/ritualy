import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fetchPlacesAsync } from 'store/actions'
import { fromFood } from 'store/selectors'
import CircularProgress from 'material-ui/CircularProgress';
import { ListItems } from 'components'

class LookupListContainer extends Component {

  render() {
    const { loading, places } = this.props
    return (
        <ListItems items={places} />
    )
  }
}

LookupListContainer.propTypes = {
  places: PropTypes.array,
}

const mapStateToProps = state => ({
  places: fromFood.getPlaces(state),
  loading: isPending(state, 'fetchPlaces'),
  failed: hasFailed(state, 'fetchPlaces'),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LookupListContainer)
