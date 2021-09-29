const styles = theme => ({
   SearchIconWrapper: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
   },
   StyledInputBase: {
      color: 'inherit',
      '& .MuiInputBase-input': {
         padding: theme.spacing(1, 1, 1, 0),
         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
         transition: theme.transitions.create('width'),
         width: '100%',
         [theme.breakpoints.up('md')]: {
            width: '20ch'
         }
      }
   }
})

export default styles
