import axiosService from './../commons/axiosService'
import { API_ENDPOINT } from '../CONSTANTS'
import qs from 'query-string'

// http://localhost:3001/
const url = 'tasks'

class TaskApi {
   getList = (params = {}) => {
      let queryParams = ''
      if (Object.keys(params).length > 0) {
         queryParams = `?${qs.stringify(params)}`
      }
      return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`)
   }

   addTask = data => axiosService.post(`${API_ENDPOINT}/${url}`, data)
}

export default new TaskApi()
