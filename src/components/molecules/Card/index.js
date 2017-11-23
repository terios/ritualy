import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactStars from 'react-stars'
import { CardMedia, CardTitle } from 'material-ui/Card'
import Divider from 'material-ui/Divider';

import { yellow700 } from 'material-ui/styles/colors'

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
  border-radius: 5px;
  transition: border-radius 0.5s ease;
    &:hover {
      border-radius: 0px;
  }
`

const getRatingComponent = rating => (
  <ReactStars
    count={5}
    size={24}
    edit={false}
    value={rating}
    color2={yellow700}
  />
)

const CardComponent = props => (
  <CardWrapper>
    <CardMedia>
      <ImageWrapper src={props.picture} alt="" />
    </CardMedia>
    <CardTitleWrapper title={props.title} subtitle={getRatingComponent(props.rating / 2)} />
  </CardWrapper>
)

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  picture: PropTypes.string.isRequired,
  withDivider: PropTypes.bool
}

export default CardComponent
