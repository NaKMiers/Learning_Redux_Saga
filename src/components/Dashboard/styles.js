const styles = theme => ({
   wrapper: {
      display: 'flex',
      height: '100vh'
   },
   content: {
      width: '100%',
      padding: 8,
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen
      })
   },
   shiftLeft: {
      marginLeft: -180,
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.leavingScreen
      })
   }
})

export default styles
