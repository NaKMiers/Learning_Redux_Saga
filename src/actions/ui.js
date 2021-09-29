import uiTypes from '../CONSTANTS/ui'

class UiActions {
   showLoading = () => ({ type: uiTypes.SHOW_LOADING })
   hideLoading = () => ({ type: uiTypes.HIDE_LOADING })

   showSidebar = () => ({ type: uiTypes.SHOW_SIDEBAR })
   hideSidebar = () => ({ type: uiTypes.HIDE_SIDEBAR })
}

export default new UiActions()
