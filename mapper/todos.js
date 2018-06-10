import todoMapper from './todo';

export default (docs) => docs.map((doc) => todoMapper(doc))
