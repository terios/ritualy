import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'

import MenuItem from 'material-ui/MenuItem'
import { categories } from 'config'
import { Title2, Label, FieldComponent } from 'components'

const OverrideButtonStyle = {
  general: {
    width: '100%',
    maxWidth: 280,
  },
}

const Wrapper = styled.div`
`
const FiltersWrapper = styled.div`
  padding-top: 0;
`

class Filters extends Component {

  props: Props;

  render() {
    const {
      category,
      handleCategoryChange,
      handleOnType,
      keyword,
     } = this.props
    return (
      <Wrapper>
        <Title2 text="Filters" />
        <FiltersWrapper>
          <SelectField
            value={category}
            floatingLabelText="What do you wanna eat?"
            onChange={handleCategoryChange}
            style={OverrideButtonStyle.general}
          >
            { categories.map((item) => {
              return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
            })
            }
          </SelectField>
          <TextField
            hintText="do you know its name?"
            floatingLabelText="Search for"
            floatingLabelFixed={false}
            onChange={handleOnType}
            value={keyword}
            style={OverrideButtonStyle.general}
          />
          <FieldComponent>
            <Label text="Search radius" />
            <Slider
              min={0}
              max={100}
              step={1}
              value={30}
            />
          </FieldComponent>
        </FiltersWrapper>
      </Wrapper>
    )
  }
}

type Props = {
  handleCategoryChange: PropTypes.func.isRequired,
}

export default Filters
