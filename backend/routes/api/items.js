const router = require('express').Router();
const Parse = require('parse/node');
const multer = require('multer');
const items = Parse.Object.extend("Items");
const item = new items();
const upload = multer();

//Obtener producto con un id especifico
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

//Agregar producto
router.post('/add',upload.single('ItemImg'), function (req, res) {
    const item = new items();
    const fileData = new Parse.File("ItemImg.png", [...req.file.buffer], "image/png");

    try{
        fileData.save().then(saved => {

            item.set('image', saved);
            item.set('Name', req.body.name);
            item.set('Description', req.body.description);
            item.set('Price', parseFloat(req.body.price));
            item.set('Stock', parseInt(req.body.stock));
            item.set('category', req.body.category);
            item.set('UserId', req.body.userid);
            item.save().then(
                (result) => {
                  if (typeof document !== 'undefined') document.write(`Items created: ${JSON.stringify(result)}`);
                  console.log('Items created', result);
                  res.send('Items created'+ result)
                },
                (error) => {
                  if (typeof document !== 'undefined') document.write(`Error while creating Items: ${JSON.stringify(error)}`);
                  console.error('Error while creating Items: ', error);
                  res.send('Error while creating Items: ', error)
                }
              );

            
        })     

    }catch(error){
        console.error('error ' , error);
        res.send('error ' , error);
    }
  });

//Buscar producto por nombre
  router.get('/getItem/Name/:name', function (req, res) {
    
    query = new Parse.Query(items);
    query.contains('Name', req.params.name);
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

//Obtener una lista de todos los productos
router.get('/getItems', function (req, res) {
    query = new Parse.Query(items);
    //query.greaterThan("Stock",0)
    query.find().then(function(item){
        if(item){
           res.send(item)
        } else {
           res.send("Nothing found, please try again")
        }
    }).catch(function(error){
        res.send("Error: " + error.code + " " + error.message)   
    });
});

//Obtener  lista de los productos de un usuario
router.get('/getItem/User/:userid', function (req, res) {
    query = new Parse.Query(items);
    query.equalTo("UserId", req.params.userid);
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

//Actualizar precio y stock de un item
router.put('/update/:itemid', function (req, res) {
    query = new Parse.Query(items);

    query.equalTo("objectId", req.params.itemid);
    console.log(req.params.itemid)
    query.get(req.params.itemid).then((itemObj) => {
        itemObj.set('Price', parseFloat(req.body.price));
        itemObj.set('Stock', parseInt(req.body.stock));

        itemObj.save(null, {
            useMasterKey: true
        }).then((response) => {
            console.log('Updated item', response);
            res.send("item actualizado")
        }).catch((error) => {
            console.error('Error while updating user', error);
            res.send("Error")
        });
    });
});

//Eliminar un item
router.delete('/delete/:itemid', function (req, res) {
    query = new Parse.Query(items);
    
    query.equalTo("objectId", req.params.itemid);
    console.log(req.params.itemid)
    query.get(req.params.itemid).then((itemObj) => {
        itemObj.destroy().then(function(response) {
            res.send("Item eliminado con exito")
          }).catch(function(response, error) {
            res.send("Error:" +error)
          });
    });
});

//Obtener 4 productos random para el home
router.get('/getItems/random', function (req, res) {
    var sw;
    var nums=[];
    var products=[];
    query = new Parse.Query(items);
    query.greaterThan("Stock",0)
    query.find().then(function(item){
        if(item){
            if(item.length<5){
                res.send(item)
            }else{
                for (let i = 0; i < 4; i++) {
                   sw=0;
                   while(sw==0){
                     var num = Math.floor(Math.random() * (item.length-1 + 1));
                     if(!nums.includes(num)){
                         nums.push(num)
                         products.push(item[num])
                         sw=1;
                     }
                   }
                }
                res.send(products)
            }

        } else {
           res.send("Nothing found, please try again")
        }
    }).catch(function(error){
        res.send("Error: " + error.code + " " + error.message)   
    });
    
});


module.exports = router;