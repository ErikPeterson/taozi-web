import {h, Component} from 'preact'
import {NavLink} from 'react-router-dom'

import style from './style.scss'


class AuthLinks extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<ul>
				<li>
					<NavLink to="/login" activeClassName={style.active}>Login</NavLink>
				</li>
				<li>
					<NavLink to="/signup" activeClassName={style.active}>Signup</NavLink>
				</li>
			</ul>)
	}
}

export default AuthLinks