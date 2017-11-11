import {h, Component} from 'preact'
import {NavLink} from 'react-router-dom'
import style from './style.scss'

class BoxButton extends Component {
	constructor(props){
		super(props)
	}

	render(){
		let className = this.props.left ? style.left : style.right
		
		return (
			<div class={this.props.active ? [style.active, style.boxbutton].join(" ") : style.boxbutton} >
				<NavLink class={className} activeClassName={style.boxlinkactive} to={this.props.to}>{this.props.text}</NavLink>
			</div>
		)
	}
}

export default BoxButton