import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FlatButton from 'material-ui/FlatButton'
import { blue800, red600 } from 'material-ui/styles/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const Icon = styled.i`
  color: white;
  margin-left: ${props => props.noMargin ? '0px !important' : '12px'}
`
const styles = {
  facebook: {
    backgroundColor: blue800,
    color: 'white',
    marginBottom: 20,
  },
  google: {
    backgroundColor: red600,
    color: 'white',
    marginBottom: 20,
  },
}

const LoginGates = () => {
  return (
    <Wrapper>

      <FlatButton
        label="Facebook"
        style={styles.facebook}
        icon={<Icon className="socicon-facebook" />}
      />

      <FlatButton
        label="Google"
        style={styles.google}
        icon={<Icon noMargin className="socicon-google" />}
      />

    </Wrapper>
  )
}

LoginGates.propTypes = {
}

export default LoginGates
