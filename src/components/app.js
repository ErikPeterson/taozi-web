import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import {Route, Redirect, withRouter } from 'react-router-dom';

import Auth from './auth'
import Header from './header';

import style from './style.scss'

const mapStateToProps = state => {
	return {
		loggedIn: !!state.auth.authToken
	}
}

class App extends Component {

	constructor(props){
		super(props);
	}

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		let loggedIn = this.props.loggedIn;
		return (
			<div class={style.app}>
					<Header />
					<Route exact path="/" render={ () => (!loggedIn ? (<Redirect to="/login" />) : (<Redirect to="/friends" />))  } />
					<Route path="/login" render={ () => (loggedIn ? (<Redirect to="/friends" />) : (<Auth />))} />
					<Route path="/signup" component={Auth} />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps)(App))