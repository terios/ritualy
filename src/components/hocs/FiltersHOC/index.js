import React from 'react'
import PropTypes from 'prop-types'

function getDisplayName(WrappedComponent) {
  return `FilterWithActions(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
}

const FilterWithActions = (WrappedComponent) => {
  const result = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        keyword: '',
        currentCategory: -1,
        radiusDistance: 200,
      }
    }

    handleCategoryChange = (event, index, value) => {
      this.setState({ category: value, currentCategory: index })
    };

    handleOnType = (event, value) => {
      this.setState({ keyword: value })
    };
    
    handleOnRadiusChange = (event, value) => {
      console.log('hello', value);
      
      this.setState({ radiusDistance: value })
    };

    lookup = () => {
      const { coords } = this.props
      this.props.roll({ ...this.state, coords })
    }
    render() {
      const { category, currentCategory, keyword, radiusDistance } = this.state
      return (
        <WrappedComponent
          category={category}
          keyword={keyword}
          radiusDistance={radiusDistance}
          currentCategory={currentCategory}
          lookup={this.lookup}
          handleCategoryChange={this.handleCategoryChange}
          handleOnType={this.handleOnType}
          handleOnRadiusChange={this.handleOnRadiusChange}
          {...this.props}
        />
      )
    }
  }
  result.displayName = getDisplayName(WrappedComponent)
  return result
}

export default FilterWithActions
