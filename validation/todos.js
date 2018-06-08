const Joi = require('joi');

const options = {
	allowUnknownBody: false,
	allowUnknownHeaders: false,
	allowUnknownQuery: false,
	allowUnknownParams: false
}

exports.post = {
	body: {
		label: Joi.string().required(),
		done: Joi.boolean().required()
	},
	options
}

exports.update = {
	params: {
		id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
	},
	body: {
		label: Joi.string().required(),
		done: Joi.boolean().required()
	},
	options
}

exports.delete = {
	params: {
		id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
	},
	options
}