const auth = (state={}, action) => {
	switch(action.type){
		case 'USER_LOG_IN':
			return {...state, signingIn: true}		
		case 'USER_LOGGED_IN':
			return {...state, authToken: action.data.auth.token, loggingIn: false }
		case 'USER_SIGNING_UP':
			return {...state, signingUp: true}
		case 'USER_LOGGING_OUT':
			return {...state, signingOut: true }
		case 'USER_LOGGED_OUT':
			return {...state, authToken: null, user: null, signingOut: true}
		case 'USER_SIGNED_UP':
			return {...state, user: action.user, signingUp: false}
		case 'AUTHENTICATION_ERROR':
			return {...state, authenticationError: {...action.err}, signingUp: false, signingIn: false, signingOut: false }
		case 'CLEAR_AUTHENTICATION_ERROR':
			return {...state, authenticationEror: null}
		default:
			return state;
	}
}

export default auth;