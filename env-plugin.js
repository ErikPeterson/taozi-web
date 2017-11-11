require('dotenv').config();
const { DefinePlugin } = require('webpack')

const getVars = () => {
	return {
		'process.env': Object.keys(process.env)
						.reduce((h, k) => {
							h[k] = JSON.stringify(process.env[k])
							return h
						}, {})
	}
}

module.exports = config => {
	const env = getVars();
	config.plugins.push(new DefinePlugin(env));
}