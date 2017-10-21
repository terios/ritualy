import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { cyan500, pink600, grey50 } from 'material-ui/styles/colors'
import { allCategories, categories } from 'config'
import { Title2 } from 'components'

const selectButtonStyle = {
  customWidth: {
    width: '90%',
    maxWidth: 280
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  text-align: left;
`

class Filters extends Component {

  props: Props;
  render() {
    const {
      category,
      subCategory,
      handleCategoryChange,
      handleSubCategoryChange,
      currentCategory
     } = this.props
    return (
      <Wrapper>
          <Title2 text="Filters" />
          <SelectField
            value={category}
            floatingLabelText="Select Category"
            onChange={handleCategoryChange}
            style={selectButtonStyle.customWidth}
          >
            { categories.map((item, index) => {
              return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
            })
            }
          </SelectField>
      </Wrapper>
    )
  }
}

type Props = {
  roll: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
}

export default Filters
