const router = require('express').Router();
const apiUserRoutes = require('./api/users');

router.use('/users',apiUserRoutes);


module.exports=router;