import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Filters } from 'components'

import RaisedButton from 'material-ui/RaisedButton'

const Wrapper = styled.div`
`

const ComponentOverride = {
  button: {
    maxWidth: 500,
    width: '100%',
  },
}
const Actions = styled.div`
  display: flex;
  justify-content: center;
`

const FiltersMobile = props => {
  return(
    <Wrapper>
      <Filters {...props} />
      <Actions>
        <RaisedButton
          onClick={props.lookup}
          label="Feed me!"
          style={ComponentOverride.button}
          secondary
        />
      </Actions>
    </Wrapper>
  )
}

FiltersMobile.prototype = {
  lookup: PropTypes.func,
}

export default FiltersMobile
