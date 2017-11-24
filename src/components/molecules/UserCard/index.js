import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { red400 } from 'material-ui/styles/colors'

import Avatar from 'material-ui/Avatar'

const CardWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${red400};
`

const InfosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`

const NameWrapper = styled.span`
  font-size: 18px;
  color: white;
`
const AvatarStyle = { margin: 5 }

const UserCard = props => (
  <CardWrapper>
    <Avatar
      src="http://fanaru.com/adventure-time/image/6827-adventure-time-simple-jake.png"
      size={50}
      style={AvatarStyle}
    />
    <InfosWrapper>
      <NameWrapper>{props.title}</NameWrapper>
    </InfosWrapper>
  </CardWrapper>
)

UserCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
}

export default UserCard
