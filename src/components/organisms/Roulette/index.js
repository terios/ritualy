import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { cyan500, pink600, grey50 } from 'material-ui/styles/colors'
import { allCategories, categories } from 'config'

const styles = {
  customWidth: {
    width: '70%',
    maxWidth: 300
  }
};

const Wrapper = styled.div`
  margin-top: 50px;
`

const FormWrapper = styled.div`
  margin-top: 50px;
`

const OverideButtonContainer = {
  width: 200,
  height: 100,
}

const OverButtonStyle = {
  fontSize: 60,
}
class Roulette extends Component {

  props: Props;
  render() {
    const {
      category,
      subCategory,
      handleCategoryChange,
      handleSubCategoryChange,
      lookup,
      currentCategory
     } = this.props

    return (
      <Wrapper>
        <FormWrapper>
          <SelectField
            value={category}
            onChange={handleCategoryChange}
            style={styles.customWidth}
          >
            { categories.map((item, index) => {
              return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
            })
            }
          </SelectField>

          { currentCategory>-1 && categories[currentCategory].categories.length >0
            && (
              <SelectField
                value={subCategory}
                onChange={handleSubCategoryChange}
                style={styles.customWidth}
              >
              { categories[currentCategory].categories.map((item, index) => {
                return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
              })
              }
            </SelectField>
          )
        }
        </FormWrapper>

        <RaisedButton onClick={lookup} label="GO" labelColor={grey50} style={OverideButtonContainer} backgroundColor="#880f4a" labelStyle={OverButtonStyle} />

      </Wrapper>
    )
  }
}

type Props = {
  roll: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
}

export default Roulette
