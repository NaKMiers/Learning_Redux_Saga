import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Dashboard from '../../../components/Dashboard'

class AdminLayoutRoute extends Component {
   render() {
      const { component: YourComponent, ...remainProps } = this.props
      return (
         <Route
            {...remainProps}
            render={routeProps => {
               return (
                  <Dashboard {...remainProps}>
                     <YourComponent {...routeProps} />
                  </Dashboard>
               )
            }}
         />
      )
   }
}

AdminLayoutRoute.propTypes = {
   YourComponent: PropTypes.func,
   remainProps: PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string,
      exact: PropTypes.bool
   })
}

export default AdminLayoutRoute
