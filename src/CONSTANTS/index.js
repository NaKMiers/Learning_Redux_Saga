import AdminHomePage from '../containers/AdminHomePage'
import TaskBoard from '../containers/TaskBoard'

export const API_ENDPOINT = 'http://localhost:3001'

export const STATUSES = [
   {
      value: 0,
      label: 'READY'
   },
   {
      value: 1,
      label: 'IN PROGRESS'
   },
   {
      value: 2,
      label: 'COMPLETE'
   }
]

export const STATUS_CODE = {
   SUCCESS: 200,
   CREATED: 201,
   UPDATED: 202
}

export const ADMIN_ROUTES = [
   {
      path: '/',
      label: 'Dashboard',
      exact: true,
      component: AdminHomePage
   },
   {
      path: '/task-board',
      label: 'Task Management',
      exact: false,
      component: TaskBoard
   }
]
