var motel = require('../models/motel'); 
 
// List of all motels 

exports.motel_list = async function(req, res) { 
    try{ 
        themotels = await motel.find(); 
        res.send(themotels); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// for a specific motel. 
exports.motel_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: motel detail: ' + req.params.id); 
}; 
 
// Handle motel create on POST. 
exports.motel_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: motel create POST'); 
}; 
 
// Handle motel delete form on DELETE. 
exports.motel_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: motel delete DELETE ' + req.params.id); 
}; 
 
// Handle motel update form on PUT. 
exports.motel_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: motel update PUT' + req.params.id); 
}; 