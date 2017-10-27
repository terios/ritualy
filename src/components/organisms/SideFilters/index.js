import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Filters } from 'components'

import RaisedButton from 'material-ui/RaisedButton'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px 0px 0 20px;
  text-align: left;
`

const SideFilters = props => {
  return(
    <Wrapper>
      <Filters {...props} />
      <RaisedButton onClick={props.lookup} label="Feed me!" fullWidth secondary />
    </Wrapper>
  )
}

SideFilters.prototype = {
  lookup: PropTypes.func,
}

export default SideFilters
