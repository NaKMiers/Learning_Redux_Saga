const styles = theme => ({
   drawerPaper: {
      position: 'relative',
      width: 180,
      height: '100%',
      zIndex: 10
   },
   menuLink: {
      textDecoration: 'none',
      color: theme.shape.textColor
   },
   menuLinkActive: {
      '&>div': {
         backgroundColor: theme.colors.hoverColor
      }
   }
})

export default styles
