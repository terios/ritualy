import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CircularProgress from 'material-ui/CircularProgress';
import { Card } from 'components'
import { getImageForList } from 'services/foursquare'

const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const ListItems = props => (
  <Wrapper>
    {
      !props.loading &&
      props.items.map(item => (
        <Card
          key={item.referralId}
          title={item.venue.name}
          rating={item.venue.rating}
          picture={getImageForList(item.venue.photos.groups)}
        />
      ))
    }
    {
      props.loading && (
        <CircularProgress size={80} thickness={5} />
      )
    }
  </Wrapper>
)

ListItems.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
}
export default ListItems
