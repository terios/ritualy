import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'

import { fetchPlacesAsync } from 'store/actions'
import { fromFood } from 'store/selectors'
import CircularProgress from 'material-ui/CircularProgress';
import { Roulette, ListItems } from 'components'

class RouletteContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 0,
      subCategory:0,
      currentCategory:-1
    };
  }

  handleCategoryChange = (event, index, value) => {
    console.log(index, value);
    this.setState({category:value, currentCategory:index})
  };

  handleSubCategoryChange = (event, index, value) => {
    console.log('subCat', index, value);
    this.setState({subCategory:value})
  };

  lookup = () => {
    const { category, subCategory } = this.state
    this.props.roll({ category, subCategory })
  }
  render() {
    const {category} = this.state

    return (
      <div>
        {!this.props.loading && this.props.places.length > 0 &&
          <ListItems tilesData={this.props.places} title={this.props.title} {...this.props} />
        }
        {!this.props.loading && this.props.places.length === 0 &&
          <Roulette
            currentCategory={this.state.currentCategory}
            subCategory={this.state.subCategory}
            handleCategoryChange = {this.handleCategoryChange}
            handleSubCategoryChange={this.handleSubCategoryChange}
            category={category}
            lookup={this.lookup}
          />
        }
        {this.props.loading &&
          <div>
            <CircularProgress />
        </div>}
      </div>
    )
  }
}

RouletteContainer.propTypes = {
  roll: PropTypes.func.isRequired,
  places: PropTypes.array,
}

const mapStateToProps = state => ({
  places: fromFood.getPlaces(state),
  title: fromFood.getTitle(state),
  loading: isPending(state, 'fetchPlaces'),
  failed: hasFailed(state, 'fetchPlaces'),
})

const mapDispatchToProps = dispatch => ({
  roll: (filters) => dispatch(fetchPlacesAsync(filters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RouletteContainer)
