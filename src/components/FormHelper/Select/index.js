import { FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'

const renderFromHelper = ({ touched, error }) => {
   if (!(touched && error)) {
      return null
   } else {
      return <FormHelperText>{touched && error}</FormHelperText>
   }
}

const renderSelectField = ({
   input,
   label,
   meta: { touched, error },
   classes,
   children,
   ...custom
}) => (
   <FormControl className={classes.formControl} error={touched && error}>
      <InputLabel htmlFor={input.name}>{label}</InputLabel>
      <Select className={classes.select} {...input} {...custom}>
         {children}
      </Select>
      {renderFromHelper({ touched, error })}
   </FormControl>
)

renderFromHelper.propTypes = {
   touched: PropTypes.bool,
   error: PropTypes.bool
}

renderSelectField.propTypes = {
   label: PropTypes.string,
   input: PropTypes.object,
   meta: PropTypes.object,
   children: PropTypes.array,
   classes: PropTypes.object
}

export default withStyles(styles)(renderSelectField)
