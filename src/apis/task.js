import axiosService from './../commons/axiosService'
import { API_ENDPOINT } from '../CONSTANTS'

const url = 'tasks'
class TaskApi {
   getList = () => {
      return axiosService.get(`${API_ENDPOINT}/${url}`)
   }
}

export default new TaskApi()
