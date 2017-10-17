import React from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

import { getImageForList } from 'services/foursquare'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
  },
}

const ListItems = props => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>{props.title}</Subheader>
      {props.tilesData.map((tile, index) => (
        <GridTile
          key={tile.referralId}
          title={tile.venue.name}
          subtitle={<span>rating <b>{tile.venue.rating}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={getImageForList(tile.venue.photos.groups)} alt={index} />
        </GridTile>
      ))}
    </GridList>
  </div>
)

ListItems.propTypes = {
  title: PropTypes.string.isRequired,
  tilesData: PropTypes.array,
}
export default ListItems
