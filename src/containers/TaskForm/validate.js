const validate = values => {
   const errors = {}
   const { title } = values
   if (!title || title.trim() === '') {
      errors.title = 'Please enter title!'
   }
   return errors
}

export default validate
