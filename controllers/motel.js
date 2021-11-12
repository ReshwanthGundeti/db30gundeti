var motel = require('../models/motel'); 
 
// List of all motel 

exports.motel_list = async function(req, res) { 
    try{ 
        themotel = await motel.find(); 
        res.send(themotel); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific motel. 

exports.motel_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await motel.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle motel create on POST. 
// Handle motel create on POST. 
exports.motel_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new motel(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"motel_type":"goat", "cost":12, "size":"large"} 
    document.motel_type = req.body.motel_type; 
    document.Cost = req.body.Cost; 
    document.Duration = req.body.Duration; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


 

// VIEWS 
// Handle a show all view 
exports.motel_view_all_Page = async function(req, res) { 
    try{ 
        themotel = await motel.find(); 
        res.render('motel', { title: 'motel Search Results', results: themotel }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// Handle motel delete form on DELETE. 
exports.motel_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: motel delete DELETE ' + req.params.id); 
}; 
 
// Handle motel update form on PUT. 
exports.motel_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: motel update PUT' + req.params.id); 
}; 