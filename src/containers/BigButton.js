import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { modalHide } from 'store/actions'

import { BigButton } from 'components'

const roll = () => {
  return null
}
const BigButtonContainer = props => <BigButton {...props} />

BigButtonContainer.propTypes = {
  roll: PropTypes.func.isRequired,
}

const mapStateToProps = () => ({
  roll,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BigButtonContainer)
