import axios from 'axios'

class AxiosService {
   constructor() {
      const instance = axios.create()
      instance.interceptors.response.use(this.handleSuccess, this.handleError)
      this.instance = instance
   }

   handleSuccess = res => res

   handleError = error => Promise.reject(error)

   get = url => this.instance.get(url)

   post = (url, body) => this.instance.post(url, body)

   put = (url, body) => this.instance.put(url, body)

   delete = url => this.instance.delete(url)
}

export default new AxiosService()
