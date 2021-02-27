import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {type: String, required: true, max: 30},
  lasName: {type: String, required: true, max: 30},
  age: {type: Number, required: true }
});

export default mongoose.model('User', UserSchema);