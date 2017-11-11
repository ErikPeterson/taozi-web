import { Component, h } from 'preact'
import style from './style.scss'
import {connect} from 'preact-redux'

const mapStateToProps = state => ({ error: state.auth.authenticationError ? state.auth.authenticationError.errors[0] : null })

class AuthenticationError extends Component {
	constructor(props){
		super(props)
	}

	renderError(){
		return this.props.error ? `${this.props.error.type}: ${this.props.error.messages}` : null
	}

	render(){
		let renderedError = this.renderError();
		let classnames = `${style.authenticationError}`
		if(!renderedError) classnames = classnames + ` ${style.hiddenError}`
		return(
			<div class={classnames}>
				{renderedError}
			</div>
		)
	}
}

export default connect(mapStateToProps)(AuthenticationError);
