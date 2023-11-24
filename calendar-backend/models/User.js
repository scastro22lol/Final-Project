// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  // Add more details maybe?
});

const User = mongoose.model('User', userSchema);

module.exports = User;
