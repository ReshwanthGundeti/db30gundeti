var express = require("express");
const motel_controlers= require('../controllers/motel'); 
var router = express.Router();

/* GET home page. */
router.get('/', motel_controlers.motel_view_all_Page);
router.post('/', motel_controlers.motel_create_post);

module.exports = router;
