import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  text-align: -webkit-center;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  margin: auto;
  height: 200px;
  height: 160px;
  margin-top: 80px;
  margin-bottom: 100px;
`

const ImgWrapper = styled.img`
  height: 100px;
`

const Logo = (props) => (
  <LogoWrapper>
    <ImgWrapper src='/logo.png'/>
  </LogoWrapper>
)

Logo.propTypes = {}

export default Logo
