import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { teal500 } from 'material-ui/styles/colors'
import MenuItem from 'material-ui/MenuItem'

const style = {
  color: teal500
}
const LinkWrapper = styled(Link)`
  text-decoration: none;
`
const DrawerLinks = props => {
  return (
    <LinkWrapper to={props.url} {...props}><MenuItem style={style}>{props.children}</MenuItem></LinkWrapper>
  )
}

DrawerLinks.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
export default DrawerLinks
