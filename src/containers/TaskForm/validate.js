const validate = values => {
   const errors = {}
   const { title } = values
   if (!title || title.trim() === '') {
      errors.title = 'Please enter title!'
   } else if (title.trim().length < 5) {
      errors.title = 'This must be greater than 5 characters'
   }
   return errors
}

export default validate
