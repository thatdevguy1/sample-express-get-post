const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//USERS
const users = [
  {
    name: 'david',
    age: '30'
  }
];

//API ROUTES

app.get('/api/users', function(req, res){
  res.send(users);
});

app.post('/api/users', function(req, res){
  console.log(req.body);
  users.push(req.body);
  res.send(users);
  //going to add to users

});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
 