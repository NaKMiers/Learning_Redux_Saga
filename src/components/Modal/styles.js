const styles = theme => ({
   modal: {
      position: 'absolute',
      width: '400px',
      zIndex: 999,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
      fontFamily: theme.typography.fontFamily
   },

   header: {
      display: 'flex',
      backgroundColor: theme.colors.primary,
      padding: theme.spacing(1),
      fontSize: '20px',
      justifyContent: 'space-between'
   },
   title: {
      color: '#333'
   },
   closeIcon: {
      cursor: 'pointer'
   }
})

export default styles
