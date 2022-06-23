const express = require("express");
const path = require("path");
const model = require('./db.js')
var cors = require('cors')


const app = express();

app.use(cors())


app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.json())

app.get('/f1', (req, res) => {
  model.find()
  .then((data) => (res.send(data)))
  .catch((err) => {console.log('ERROR in SERVER INDEX at app.get', err)});
});

app.post('/f1', (req, res) => {
  model.save(req.body)
});

app.patch('/f1', (req, res) => {
  model.user.findByIdAndDelete(req.body._id).exec()
  .then(() => {res.sendStatus(201)})
  .catch((err) => console.log('ERROR IN SERVER INDEX AT app.patch', err))
});

app.put('/f1', (req, res) => {
  console.log(req.body.value)
  model.user.findByIdAndUpdate(req.body._id, {$inc: {liked: req.body.value}},
   function (err, user) {
    if (err){
      console.log(err)
  }
  else{
      console.log("Updated User : ", user);
  }
  })
});


app.listen(3001, function() {
  console.log('express server is running on port 3001')
})
