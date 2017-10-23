import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'

import { fetchPlacesAsync } from 'store/actions'
import { fromFood } from 'store/selectors'
import CircularProgress from 'material-ui/CircularProgress';
import { Filters } from 'components'

class FiltersContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 0,
      currentCategory:-1
    };
  }

  handleCategoryChange = (event, index, value) => {
    this.setState({category:value, currentCategory:index})
  };

  lookup = () => {
    const { category, subCategory } = this.state
    this.props.roll({ category, subCategory })
  }
  render() {
    const {category} = this.state

    return (
      <Filters
        currentCategory={this.state.currentCategory}
        handleCategoryChange = {this.handleCategoryChange}
        category={category}
        lookup={this.lookup}
      />
    )
  }
}

FiltersContainer.propTypes = {
  roll: PropTypes.func.isRequired,
  places: PropTypes.array,
}

const mapStateToProps = state => ({
  places: fromFood.getPlaces(state),
  title: fromFood.getTitle(state),
})

const mapDispatchToProps = dispatch => ({
  roll: (filters) => dispatch(fetchPlacesAsync(filters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer)
