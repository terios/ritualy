import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { cyan500, pink600, grey50 } from 'material-ui/styles/colors'
import { categories } from 'config'
import { Title2 } from 'components'

const selectButtonStyle = {
  customWidth: {
    width: '100%',
    maxWidth: 280,
  },
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  text-align: left;
`
const FiltersWrapper = styled.div`
  padding: 20px 0;
`

class Filters extends Component {

  props: Props;
  render() {
    const {
      category,
      handleCategoryChange,
      lookup,
     } = this.props
    return (
      <Wrapper>
        <Title2 text="Filters" />
        <FiltersWrapper>
          <SelectField
            value={category}
            floatingLabelText="What do you wanna eat?"
            onChange={handleCategoryChange}
            style={selectButtonStyle.customWidth}
          >
            { categories.map((item) => {
              return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
            })
            }
          </SelectField>
        </FiltersWrapper>
        <RaisedButton onClick={lookup} label="Feed me!" fullWidth secondary />
      </Wrapper>
    )
  }
}

type Props = {
  roll: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  lookup: PropTypes.func.isRequired,
}

export default Filters
