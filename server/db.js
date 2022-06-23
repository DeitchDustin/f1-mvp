const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/f1');

const f1 = new mongoose.Schema ({
  user: String,
  date: { type: Date, default: Date.now },
  comment:  String,
  deleted: {type: Boolean, default: false},
  liked: {type: Number, default: 0}
})

const user = mongoose.model('User', f1);

let find = () => {
  return user.find()
}


let save = (commentEntry) => {
  user.create(commentEntry)
}

module.exports.user = user;
module.exports.find = find;
module.exports.save = save;
