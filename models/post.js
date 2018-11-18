const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    proverb: {
        type: String,
        require: true
    },
    proverbavt: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    img:{
        type: String,
        require: true
    },
    imgpost:{
        type: String,
        require: true
    }
},{
    timestamps: true
});

schema.set('toJSON', {
    virtuals :true
})

module.exports = mongoose.model('Post' , schema);

