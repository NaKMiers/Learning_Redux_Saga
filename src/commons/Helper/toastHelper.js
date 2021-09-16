import { toast } from 'react-toastify'

class Toast {
   toastError(message, position = 'TOP_RIGHT') {
      toast.error(message, { position: toast.POSITION[position] })
   }

   toastSuccess(message, position = 'TOP_RIGHT') {
      toast.success(message, { position: toast.POSITION[position] })
   }
}

export default new Toast()
