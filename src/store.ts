import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import { Reducer, State } from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistPartial } from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk"

export type AppState = {
  state: State & PersistPartial
}

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, Reducer)

export const store = createStore(
      combineReducers<AppState>({
        state: persistedReducer,
      }),
      storeEnhancers(applyMiddleware(thunk))
  )

export const persistor = persistStore(store)
