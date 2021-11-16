var express = require("express");
const motel_controlers= require('../controllers/motel'); 
var router = express.Router();

/* GET home page. */
router.get('/', motel_controlers.motel_view_all_Page);

/* GET detail motel page */ 
router.get('/detail', motel_controlers.motel_view_one_Page); 


module.exports = router;
