import { h, Component } from 'preact'
import { withRouter, NavLink } from 'react-router-dom'
import Login from './login'
import Signup from './signup'
import BoxButton from './box-button'

import style from './style.scss'

class Auth extends Component {
	constructor(props){
		super(props)
	}

	render(){
		let login = this.props.location.pathname === '/login'
		return (
			<div class={style.authmodal}>
				<div class={style.toggle}>
					<BoxButton to="/login" text="Login" left={true} active={login} />
					<BoxButton to="/signup" text="Sign Up" active={!login} />
				</div>
				<div class={style.panelbody}>
					{ login ? <Login /> : <Signup /> }
				</div>
			</div>
		)
	}
}

export default withRouter(Auth)
