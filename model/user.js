let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    id: Number,
    name: String,
    age: Number,
    email: String,
    address: Object,
    password: String,
    role: String
});

module.exports = mongoose.model('users', UserSchema);
