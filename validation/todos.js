const Joi = require('joi');

const options = {
	allowUnknownBody: false,
	allowUnknownHeaders: false,
	allowUnknownQuery: false,
	allowUnknownParams: false
}

const post = {
	body: {
		label: Joi.string().allow('').required(),
		done: Joi.boolean().required()
	},
	options
}

const update = {
	params: {
		id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
	},
	body: {
		label: Joi.string().allow('').required(),
		done: Joi.boolean().required()
	},
	options
}

const del = {
	params: {
		id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
	},
	options
}

export { post, update, del };