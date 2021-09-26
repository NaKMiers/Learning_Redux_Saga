import modalTypes from '../CONSTANTS/modal'

class ModalActions {
   showModal = () => ({ type: modalTypes.SHOW_MODAL })

   hideModal = () => ({ type: modalTypes.HIDE_MODAL })

   changeModalTitle = title => ({ type: modalTypes.CHANGE_MODAL_TITLE, payload: { title } })

   changeModalContent = component => ({
      type: modalTypes.CHANGE_MODAL_CONTENT,
      payload: {
         component
      }
   })
}

export default new ModalActions()
