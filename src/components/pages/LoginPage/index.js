import React, { Component } from 'react'
import styled from 'styled-components'
import IconButton from 'material-ui/IconButton'

import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left';

import {
  GenericTemplate,
  Header,
} from 'components'
import layout from 'utils/LayoutGenerator';

const Wrapper = styled.div`
  text-align: -webkit-center;
  display: flex;
  flex-direction: row;
`

class LoginPage extends Component {
  constructor(props){
    super(props)
  }
  getHeaderComponent() {
    return <Header
      iconElementLeft={<IconButton><NavigationLeft /></IconButton>}
    />
  }
  render() {
    return (
      <GenericTemplate
        header={this.getHeaderComponent()}
        >
        <Wrapper>
          <div>Login Page</div>
        </Wrapper>
      </GenericTemplate>
    )
  }
}
export default LoginPage
