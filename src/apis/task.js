import axiosService from './../commons/axiosService'
import { API_ENDPOINT } from '../CONSTANTS'
import qs from 'query-string'

// http://localhost:3001
const url = 'tasks'

class TaskApi {
   // [GET] http://localhost:3001/tasks
   getList = (params = {}) => {
      let queryParams = ''
      if (Object.keys(params).length > 0) {
         queryParams = `?${qs.stringify(params)}`
      }
      return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`)
   }

   // [POST] http://localhost:3001/tasks
   addTask = data => axiosService.post(`${API_ENDPOINT}/${url}`, data)

   // [PUT] http://localhost:3001/tasks/:id
   updateTask = (data, taskId) => axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data)

   // [DELETE] http://localhost:3001/tasks/:id
   deleteTask = taskId => axiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`)
}

export default new TaskApi()
