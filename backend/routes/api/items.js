const router = require('express').Router();
const Parse = require('parse/node');
const multer = require('multer');
const items = Parse.Object.extend("Items");
const item = new items();
const upload = multer();


router.get('/getItem/:itemId', function (req, res) {
   
    query = new Parse.Query(items);
    query.equalTo("objectId", req.params.itemId);
    query.first().then(function(item){
        if(item){
            console.log(item)
           res.send(item)
        } else {
           res.send("Nothing found, please try again")
        }
    }).catch(function(error){
        res.send("Error: " + error.code + " " + error.message)   
    });
});

router.post('/add',upload.single('ItemImg'), function (req, res) {
   
    const fileData = new Parse.File("ItemImg.png", [...req.file.buffer], "image/png");
    //console.log(fileData);
    try{
        fileData.save().then(saved => {

            item.set('image', saved);
            item.set('Name', req.body.name);
            item.set('Description', req.body.description);
            item.set('Price', parseFloat(req.body.price));
            item.set('Stock', parseInt(req.body.stock));
            item.set('category', req.body.category);
            
            item.save();

            //console.log("El item ha sido añadido con exito");
            res.send("El item ha sido añadido con exito")
        })     

    }catch(error){
        console.error('error ' , error);
        res.send('error ' , error);
    }
  });

  router.get('/GetItems/:category', function (req, res) {
 
    query = new Parse.Query(items);
    console.log(req.params.category)
    query.equalTo("category", req.params.category);
    query.greaterThan("Stock",0)
    query.find().then(function(item){
        if(item){
            console.log(item)
           res.send(item)
        } else {
           res.send("Nothing found, please try again")
        }
    }).catch(function(error){
        res.send("Error: " + error.code + " " + error.message)   
    });
});

router.get('/getAll/all', function (req, res) {
    query = new Parse.Query(items);
    query.greaterThan("Stock",0)
    query.find().then(function(item){
        if(item){
            console.log(item)
           res.send(item)
        } else {
           res.send("Nothing found, please try again")
        }
    }).catch(function(error){
        res.send("Error: " + error.code + " " + error.message)   
    });
});

module.exports = router;