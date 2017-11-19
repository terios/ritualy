import React from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LoginGates } from 'components'
import { provider, auth } from 'firebase'
import { authSuccess } from 'store/actions'

class LoginGatesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }
  componentDidMount() {
    const { authSuccess } = this.props
    auth().getRedirectResult().then(function(result) {
      console.log('====================================');
      console.log('result', result);
      console.log('====================================');
      if (result && result.user) {
        authSuccess({
          provider: 'facebook',
          payload: result,
        })
      }
    }).catch(function(error) {
      console.log('====================================');
      console.log('error', error);
      console.log('====================================');
    })
  }
  facebookAuth = () => {
    auth().signInWithRedirect(provider)
  }
  render() {
    const {
      props,
    } = this;

    return (
      <LoginGates handleFacebook={this.facebookAuth} />
    )
  }
}


LoginGatesContainer.propTypes = {
  authSuccess: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  authSuccess: data => dispatch(authSuccess(data)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(LoginGatesContainer)