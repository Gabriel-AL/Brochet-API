import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, index: true, default: mongoose.Types.ObjectId},
  login: String,
  usual: [Number],
  GM: Boolean,
  prefMail: Boolean,
  email: String
});

UserSchema.set('toJSON', {getters: true});

let User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getUserByID = (root, {id}) => {
    return new Promise((resolve, reject)=> {
      User.findById(id, (err, res)=> {
        err ? reject(err) : resolve([res]);
      });
    });
};

module.exports.getUserByLogin = (root, {login}) => {
    return new Promise((resolve, reject)=> {
      User.find({"login":login}, (err, res)=> {
        err ? reject(err) : resolve(res);
        console.log(res);
      });
    });
};

module.exports.updateUser = (user) => {
  return new Promise((resolve, reject)=>{
    user.save((err, res)=>{
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
      console.log(res);
    });
  });
};
