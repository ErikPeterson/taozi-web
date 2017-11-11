import {h, Component} from 'preact'
import style from './style.scss'

class Signup extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<form onSubmit={ () => { this.signup }} >
				<div class={style.authfield}>
					<label for="email">Email</label>
					<input type="email" name="email" />
				</div>
				<div class={style.authfield}>
					<label for="name">Name</label>
					<input type="text" name="name" />
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

export default Signup