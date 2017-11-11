import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import style from './style.scss';
import Logo from '../../assets/taozi.svg'
import SiteLinks from './site-links'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
	return {
		loggedIn: !!state.auth.authToken,
		user: state.auth.user
	}
}

class Header extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<header class={style.header}>
				<div class={style.sitelogo}>
					<img src={Logo} />
				</div>
				<h1 class={style.sitetitle}>Taozi</h1>
				<SiteLinks loggedIn={this.props.loggedIn} />
			</header>
		);
	}
}

export default withRouter(connect(mapStateToProps)(Header))
