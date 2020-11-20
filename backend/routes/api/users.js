const router = require('express').Router();
const Parse = require('parse/node')
const User = Parse.Object.extend("User");


router.post('/login', function (req, res) {
  var user = Parse.User
    .logIn(req.body.email, req.body.password).then(function (user) {
      res.send(user)
    }).catch(function (error) {
      res.send("Error: " + error.code + " " + error.message)
    });
});

router.post('/register', function(req, res) {
  const user = new Parse.User();
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


router.put('/update', function(req, res) {
  const User = Parse.Object.extend('User'); 
  const query = new Parse.Query(User);

  query.equalTo("objectId", req.body.userid);
  query.get(req.body.userid).then((userObj) => {

    userObj.set('address', req.body.address);
    userObj.set('password', req.body.password);
    userObj.set('telephone', req.body.cell);
   
    userObj.save(null, {
      useMasterKey: true
    }).then((response) => {
      console.log('Updated user', response);
      res.send("Usuario actualizado")
    }).catch((error) => {
      console.error('Error while updating user', error);
      res.send("Error")
    });
  });
 });
 
 //devuelve la informacion de un usuario
 router.get('/getUser/:userid',function(req,res){
    const User = Parse.Object.extend('User');
    const query = new Parse.Query(User);

    query.equalTo("objectId", req.params.userid);
    query.first().then(function (user) {
      if (user) {
        res.send(user)
      } else {
        res.send("Nothing found, please try again")
      }
    }).catch(function (error) {
      res.send("Error: " + error.code + " " + error.message)
    });
 });

module.exports = router;