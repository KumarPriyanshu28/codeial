const express=require('express');

//express.Router() function is used to create a new router object. 
//This function is used when you want to create a new router object in your program to handle requests.
const router=express.Router();

const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));

//for any further routes,access from here
//router.use('/routerName',require('.routefile));

module.exports = router;

