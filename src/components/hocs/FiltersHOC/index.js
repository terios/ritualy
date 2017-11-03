import React from 'react'
import PropTypes from 'prop-types'

function getDisplayName(WrappedComponent) {
    return `FilterWithActions(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
}

const FilterWithActions = (WrappedComponent) => {
  let result = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        keyword: '',
        currentCategory:-1
      };
    }

    handleCategoryChange = (event, index, value) => {
      this.setState({ category:value, currentCategory:index })
    };

    handleOnType = (event, value) => {
      this.setState({ keyword:value })
    };

    lookup = () => {
      const { category, keyword } = this.state
      const { coords } = this.props
      this.props.roll({ category, keyword, coords })
    }
    render() {
      const { category, currentCategory, keyword } = this.state
      return (
        <WrappedComponent
          category={category}
          keyword={keyword}
          currentCategory={currentCategory}
          lookup={this.lookup}
          handleCategoryChange={this.handleCategoryChange}
          handleOnType={this.handleOnType}
          {...this.props}
        />
      )
    }
  };
  result.displayName = getDisplayName(WrappedComponent);
  return result;
}

export default FilterWithActions
