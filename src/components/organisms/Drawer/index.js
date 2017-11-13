import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { UserCard, DrawerLinks } from 'components'


const LinksWrapper = styled.div`
`

const CustomDrawer = (props) => {
  return (
    <Drawer
      docked={false}
      width={250}
      open={props.drawerOpen}
      onRequestChange={props.closeDrawer}
    >
      <UserCard title="Username" />
      <LinksWrapper>
        <DrawerLinks url="/login">Login</DrawerLinks>
        <DrawerLinks url="/login">Profile</DrawerLinks>
        <DrawerLinks url="/login">Wanted list</DrawerLinks>
      </LinksWrapper>
    </Drawer>
  )
}
CustomDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
}

export default CustomDrawer
