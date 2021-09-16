import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const composeEnhancers =
   (process.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })) ||
   compose

function configureStore() {
   const middlewares = [thunk]
   const enhancers = applyMiddleware(...middlewares)
   const store = createStore(reducer, composeEnhancers(enhancers))

   return store
}

export default configureStore
