import React from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CircularProgress from 'material-ui/CircularProgress'

import { isPending, hasFailed } from 'redux-saga-thunk'
import { LoginGates } from 'components'
import { auth } from 'firebase'
import { authSuccess, authFacebook } from 'store/actions'
import { fromAuth } from 'store/selectors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

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
  render() {
    const {
      user,
      loading,
      failed,
      authFacebook,
    } = this.props;

    return (
      <Wrapper>
        {
          !user && !loading && !failed && (
            <LoginGates
              handleFacebook={authFacebook}
            />
          )
        }
        {
          !user && loading && !failed && (
            <CircularProgress size={80} thickness={5} />
          )
        }
        {
          !user && loading && !failed && (
            <CircularProgress size={80} thickness={5} />
          )
        }
        {
          user && (
            <span>welcome {user.displayName}</span>
          )
        }
      </Wrapper>
    )
  }
}

LoginGatesContainer.defaultProps = {
  loading: false,
  failed: false,
}

LoginGatesContainer.propTypes = {
  authSuccess: PropTypes.func.isRequired,
  authFacebook: PropTypes.func.isRequired,
  user: PropTypes.object,
  loading: PropTypes.bool,
  failed: PropTypes.bool,
}
const mapStateToProps = state => ({
  loading: isPending(state, 'authenticating'),
  failed: hasFailed(state, 'authenticating'),
  user: fromAuth.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  authSuccess: data => dispatch(authSuccess(data)),
  authFacebook: () => dispatch(authFacebook()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(LoginGatesContainer)