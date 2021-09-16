import axiosService from './../commons/axiosService'
import { API_ENDPOINT } from '../CONSTANTS'

const url = 'tasks'

export const fetchListTask = () => {
   return axiosService.get(`${API_ENDPOINT}/${url}`)
}
