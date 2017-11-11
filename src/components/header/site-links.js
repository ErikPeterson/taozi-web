import {h, Component} from 'preact'
import style from './style.scss'

import AccountLinks from './account-links'
import AuthLinks from './auth-links'

class SiteLinks extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (<nav class={style.sitelinks}>
					{ this.props.loggedIn ? <AccountLinks /> : <AuthLinks /> }
				</nav>)
	}
}

export default SiteLinks