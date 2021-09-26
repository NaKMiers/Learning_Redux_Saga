import uiTypes from '../CONSTANTS/ui'

class UiActions {
   showLoading = () => ({ type: uiTypes.SHOW_LOADING })

   hideLoading = () => ({ type: uiTypes.HIDE_LOADING })
}

export default new UiActions()
