import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card } from 'components'
import { getImageForList } from 'services/foursquare'

const Wrapper = styled.div`
  width: 100%;
  @media (min-width : 1224px) {
    width: calc(100% - 300px);
  }
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-evenly;
`

const ListItems = props => (
  <Wrapper>
    {
      props.items.map((item) => (
        <Card
          key={item.referralId}
          title={item.venue.name}
          rating={<span>rating <b>{item.venue.rating}</b></span>}
          picture={getImageForList(item.venue.photos.groups)}
        />
      ))
    }
  </Wrapper>
)

ListItems.propTypes = {
  items: PropTypes.array,
}
export default ListItems
