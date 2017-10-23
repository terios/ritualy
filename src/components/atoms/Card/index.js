import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CardMedia, CardTitle } from 'material-ui/Card'

const CardWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  @media (min-device-width : 415px) and (max-device-width : 768px) {
    max-width: 300px;
  }
  @media (min-width : 768px) and (max-width : 1224px) {
    max-width: 300px;
  }
  @media (min-width : 1224px) {
    max-width: 300px;
  }
`

const CardTitleWrapper = styled(CardTitle)`
  text-align: left;
  padding: 0 !important;
`

const ImageWrapper = styled.img`
  border-radius: 15px;
  transition: border-radius 0.5s ease;
    &:hover {
    border-radius: 0px;
  }
`

const CardComponent = (props) => (
  <CardWrapper>
    <CardMedia>
      <ImageWrapper src={props.picture} alt="" />
    </CardMedia>
    <CardTitleWrapper title={props.title} />
  </CardWrapper>
)

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default CardComponent
