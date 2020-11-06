const router = require('express').Router();
const Parse = require('parse/node')
const MyCustomClass = Parse.Object.extend('User');
const myNewObject = new MyCustomClass();



router.get('/', function(req, res) {
   myNewObject.set('username', 'cuadradob');
   myNewObject.set('password', '123456');
   myNewObject.set('email', 'cuadradob@uninorte.edu.co');

   myNewObject.save().then(
   (result) => {
    if (typeof document !== 'undefined') document.write(`ParseObject created: ${JSON.stringify(result)}`);
    res.send('ParseObject created');
   },
   (error) => {
    if (typeof document !== 'undefined') document.write(`Error while creating ParseObject: ${JSON.stringify(error)}`);
    console.error('Error while creating ParseObject: ', error);
    res.send(error.message)
   }
 );

});


module.exports = router;