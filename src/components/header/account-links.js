import {h, Component} from 'preact'
import {NavLink} from 'react-router-dom'
import { connect } from 'preact-redux'

import style from './style.scss'

class AccountLinks extends Component {
	constructor(props){
		super(props)
	}

	logOut(e){
		e.preventDefault();
		this.props.dispatch({ type: 'USER_LOGGING_OUT', data: { route: '/auth', config: { method: 'DELETE'} }})
	}

	render(){
		return (
			<ul>
				<li>
					<NavLink to="/account" activeClassName={style.active}>Account</NavLink>
				</li>
				<li>
					<a href="/logout" onClick={(e) => (this.logOut(e))}>Log Out</a>
				</li>
			</ul>)
	}
}

export default connect()(AccountLinks)