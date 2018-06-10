import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default mongoose.model('Todos', new Schema({
    label: {
        type: String,
        required: function () {
            return typeof this.label === 'string' ? false : true
        }
    },
    done: {
        type: Boolean,
        required: true
    }
}));