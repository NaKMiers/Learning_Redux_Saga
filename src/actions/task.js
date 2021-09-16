import taskApis from '../apis/task'

class taskActions {
   fetchListTask = () => dispatch =>
      taskApis
         .getList()
         .then(data => {
            console.log('data: ', data)
         })
         .catch(error => console.log(error))
}

export default new taskActions()
