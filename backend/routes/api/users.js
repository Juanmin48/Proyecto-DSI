const router = require('express').Router();
const Parse = require('parse/node')
const user = new Parse.User();


router.post('/login', function (req, res) {
  var user = Parse.User
    .logIn(req.body.email, req.body.password).then(function (user) {
      res.send(user)
    }).catch(function (error) {
      console.log("Error: " + error.code + " " + error.message);
      res.send()
    });
});

router.post('/register', function(req, res) {
  user.set('username', req.body.username);
  user.set('name', req.body.name);
  user.set('lastname', req.body.lastname);
  user.set('telephone', req.body.cell);
  user.set('email', req.body.email);
  user.set('password', req.body.password);
  user.set('address', req.body.address);
  user.signUp().then(function(user) {
    res.send('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"))
}).catch(function(error){
    res.send("Error: " + error.code + " " + error.message)
});
});

module.exports = router;