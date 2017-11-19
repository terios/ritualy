import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import IconButton from 'material-ui/IconButton'
import { red400 } from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'
import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left'

import firebase from 'firebase'

import {
  GenericTemplate,
  Logo,
  NavigationHeader,
} from 'components'

import { LoginGates } from 'containers'

const Wrapper = styled(Paper)`
  text-align: -webkit-center;
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 0 50px;
  justify-content: center;
  margin: auto;
  height: 200px;
  max-width: 400px;
`

class LoginPage extends Component {

  getHeaderComponent = (history) => {
    return (
      <NavigationHeader
        title="Go back"
        iconElementLeft={<IconButton><NavigationLeft /></IconButton>}
        leftElmAction={history.goBack}
      />
    )
  }
  handleClick = () => {
    console.log('clicked')
    /*
    const itemsRef = firebase.database().ref('broujoulachat');
    const item = {
      title: 'title',
      user: 'user'
    }
    itemsRef.push(item);
    */
  }
  props: Props
  render() {
    const { history } = this.props
    return (
      <GenericTemplate
        header={this.getHeaderComponent(history)}
        backgroundColor={red400}
      >
        <Logo />
        <Wrapper onClick={this.handleClick}>
          <LoginGates />
        </Wrapper>
      </GenericTemplate>
    )
  }
}

const Props = {
  history: PropTypes.func.isRequired,
}
export default LoginPage
