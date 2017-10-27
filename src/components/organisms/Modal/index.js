import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from 'react-modal'
import RaisedButton from 'material-ui/RaisedButton'

const modalStyle = {
  content :{
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay:{
    zIndex: 10,
  }
}

const GenericModal = props => {
  return(
    <Modal
      isOpen={props.modalState}
      contentLabel="Modal"
      style={modalStyle}
    >
      <h2>What its gonna be today</h2>
      {props.children}
    </Modal>
  )
}

GenericModal.prototype = {
  modalState: PropTypes.bool.isRequired
}

export default GenericModal
