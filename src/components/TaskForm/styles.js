const styles = theme => ({
   modal: {
      position: 'absolute',
      width: '400px',
      zIndex: 999,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      backgroundColor: theme.shape.backgroundColor,
      border: theme.shape.borderColor,
      padding: 16
   },
   textField: {
      width: '100%'
   },
   button: {
      marginTop: 8
   }
})

export default styles
