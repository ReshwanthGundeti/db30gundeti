var express = require("express");
const motel_controlers= require('../controllers/motel'); 
var router = express.Router();

/* GET home page. */
router.get('/', motel_controlers.motel_view_all_Page);

/* GET detail motel page */ 
router.get('/detail', motel_controlers.motel_view_one_Page); 

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
 /* GET create motel page */ 
router.get('/create', motel_controlers.motel_create_Page);

/* GET create update page */ 
router.get('/update',secured, motel_controlers.motel_update_Page); 

/* GET create motel page */ 
router.get('/delete', motel_controlers.motel_delete_Page); 

module.exports = router;