var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var motel_controller = require('../controllers/motel');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// motel ROUTES ///
// POST request for creating a motel.
router.post('/motels', motel_controller.motel_create_post);
// DELETE request to delete motel.
router.delete('/motels/:id', motel_controller.motel_delete);
// PUT request to update motel.
router.put('/motels/:id', motel_controller.motel_update_put);
// GET request for one motel.
router.get('/motels/:id', motel_controller.motel_detail);
// GET request for list of all motel items.
router.get('/motels', motel_controller.motel_list);
module.exports = router;