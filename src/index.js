import './style';

import {h, render} from 'preact'
import { Provider } from 'preact-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { REHYDRATE, PURGE, persistStore, persistCombineReducers } from 'redux-persist'
import localforage from 'localforage'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app';
import rootReducer from './reducers'
import API from './services/api'

const reducers = persistCombineReducers({ debug: true, key: 'taozi', storage: localforage }, rootReducer)
const store = createStore(reducers, undefined, compose(applyMiddleware(API)))
const persistor = persistStore(store)

render(
	(<Provider store={store} >
		<PersistGate persistor={persistor}>
		<Router>
			<App />
		</Router>
		</PersistGate>
	</Provider>
), document.body);
