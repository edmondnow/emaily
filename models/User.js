const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, unique: true },
  credits: { type: Number, default: 100 }
});

mongoose.model('users', userSchema);
