import fetch from 'isomorphic-fetch'
const BASE = process.env.API_BASE || '/'
const ACTIONS = {
	'USER_LOG_IN': ['USER_LOGGED_IN', 'AUTHENTICATION_ERROR'],
	'USER_LOGGING_OUT': ['USER_LOGGED_OUT', 'AUTHENTICATION_ERROR']
}

const requestGenerator = (next) => {
	return (route, config, action, error) => {
		route = `${BASE}${route}`
		fetch(route, config)
			.then((response) => {
				return Promise.all([response.ok, response.json()])
			}).then(([ok, data]) => {
				if(ok) return next({ type: action, data})
				return next({ type: error, err: data })
			}).catch(e => console.error(e));
	}
}

const API = (store) => {
	return (next) => {
		return (action) => {
			next(action)
			let apiKey = store.getState().auth.authToken
			let defaultHeaders = { 'Content-Type': 'application/json'}
			if(apiKey) defaultHeaders.Authorization = `Bearer ${apiKey}`
			if(!ACTIONS[action.type]) return;
			let [nextAction, errorAction] = ACTIONS[action.type]
			let {route, config} = action.data;
			config.headers = {...defaultHeaders, ...config.headers}
			config.body = config.body && JSON.stringify(config.body)
			requestGenerator(next)(route, config, nextAction, errorAction);
		}
	}
}

export default API