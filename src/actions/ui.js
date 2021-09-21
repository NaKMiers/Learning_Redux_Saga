import ui from '../CONSTANTS/ui'

class UiActions {
   showLoading = () => ({ type: ui.SHOW_LOADING })

   hideLoading = () => ({ type: ui.HIDE_LOADING })
}

export default new UiActions()
