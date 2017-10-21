import React from 'react';
import styled from 'styled-components'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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

const CardComponent = () => (
  <CardWrapper>
    <CardMedia>
      <ImageWrapper src="http://blueberrybuilders.com/wp-content/uploads/2017/06/BBeastone_004-500x500.jpg" alt="" />
    </CardMedia>
    <CardTitleWrapper title="Card title" subtitle="Card subtitle" />
  </CardWrapper>
);

export default CardComponent;
