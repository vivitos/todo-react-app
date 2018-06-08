const todoMapper = require('./todo')

module.exports = (docs) => docs.map((doc) => todoMapper(doc))
