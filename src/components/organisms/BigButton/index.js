import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import RaisedButton from 'material-ui/RaisedButton'
import { red400, grey50 } from 'material-ui/styles/colors'

const Wrapper = styled(RaisedButton)`
`

const OverideButtonContainer = {
  width: 250,
  height: 250,
}

const OverButtonStyle = {
  fontSize: 120,
}

const BigButton = (props) => {
  return (
    <Wrapper onClick={props.roll} label="GO" labelColor={grey50} style={OverideButtonContainer} backgroundColor={red400} labelStyle={OverButtonStyle} />
  )
}

BigButton.propTypes = {
  roll: PropTypes.func.isRequired,
}

export default BigButton
