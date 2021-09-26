import { Modal, withStyles } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import modalActions from '../../actions/modal'
import styles from './styles'

class _Modal extends Component {
   render() {
      const { classes, modal, modalActionCreators } = this.props
      const { hideModal } = modalActionCreators
      const { showModal, title, component } = modal
      return (
         <Modal open={showModal} onClose={hideModal}>
            <div className={classes.modal}>
               <div className={classes.header}>
                  <span className={classes.title}>{title}</span>
                  <ClearIcon className={classes.closeIcon} onClick={hideModal} />
               </div>
               {component}
            </div>
         </Modal>
      )
   }
}

_Modal.propTypes = {
   classes: PropTypes.object,
   handleClose: PropTypes.func,
   modal: PropTypes.shape({
      showModal: PropTypes.bool,
      title: PropTypes.string,
      component: PropTypes.object
   }),
   modalActionCreators: PropTypes.shape({
      hideModal: PropTypes.func
   })
}

const mapStateToProps = state => ({
   modal: state.modal
})

const mapDispatchToProps = dispatch => ({
   modalActionCreators: bindActionCreators(modalActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withStyles(styles), withConnect)(_Modal)
