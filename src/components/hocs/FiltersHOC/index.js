import React from 'react'
import PropTypes from 'prop-types'


const FilterWithActions = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        keyword: '',
        category: 0,
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
      this.props.roll({ category, keyword })
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
}

export default FilterWithActions
