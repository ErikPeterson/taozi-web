import {h, Component} from 'preact'
import style from './style.scss'
import {connect} from 'preact-redux'
import AuthenticationError from './authentication-error'

const mapStateToProps = (state) => {
	return {
		loading: state.auth.loggingIn,
	}
}


class Login extends Component {
	constructor(props){
		super(props)
	}

	login(e){
		e.preventDefault();
		let form = e.target
		let email = form.elements.email.value
		let password = form.elements.password.value

		this.props.dispatch({type: 'CLEAR_AUTHENTICATION_ERROR'})
		this.props.dispatch({type: 'USER_LOG_IN', data: { route: '/auth', config: { method: 'POST', body: { auth: {email, password} }}}})
	}

	componentWillUnmount(){
		this.props.dispatch({type: 'CLEAR_AUTHENTICATION_ERROR'})
	}

	render(){
		return (
			<form onSubmit={ (e) => { this.login(e) }} >
				<AuthenticationError />
				<div class={style.authfield}>
					<label for="email">Email</label>
					<input type="email" name="email" />
				</div>
				<div class={style.authfield}>
					<label for="password">Password</label>
					<input type="password" name="password" />
				</div>
				<div class={style.submit}>
					<button action="submit">Submit</button>
				</div>
			</form>
		)
	}
}

export default connect(mapStateToProps)(Login)