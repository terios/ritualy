import React, { Component, Child } from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'

import { fetchPlacesAsync } from 'store/actions'
import { fromFood } from 'store/selectors'
import CircularProgress from 'material-ui/CircularProgress'
import { Filters, FiltersHOC, GeoLocationHOC } from 'components'

class FiltersContainer extends Component {

  componentWillUpdate(nextProps) {
    const { category, keyword, coords } = nextProps
    this.props.roll({ category, keyword, coords })
  }
  renderChildren() {
    const props = this.props
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { ...props })
    })
  }

  render() {
    return (
      <div>{this.renderChildren()}</div>
    )
  }
}

FiltersContainer.propTypes = {
  roll: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  roll: filters => dispatch(fetchPlacesAsync(filters)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  GeoLocationHOC({}),
  FiltersHOC,
)(FiltersContainer)
