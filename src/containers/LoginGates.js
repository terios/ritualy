import React from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LoginGates } from 'components'

import { authFacebook } from 'store/actions'

const LoginGatesContainer = (props) => {
  return (
    <LoginGates handleFacebook={props.facebookAuth} />
  )
}


LoginGatesContainer.propTypes = {
  facebookAuth: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  facebookAuth: () => dispatch(authFacebook()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(LoginGatesContainer)