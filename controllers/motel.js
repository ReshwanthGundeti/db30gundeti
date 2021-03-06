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
 
// Handle motel delete on DELETE. 
exports.motel_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await motel.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};
 
// Handle motel update form on PUT. 
exports.motel_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await motel.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.motel_type)  
               toUpdate.motel_type = req.body.motel_type; 
        if(req.body.Cost) toUpdate.Cost = req.body.Cost; 
        if(req.body.Duration) toUpdate.Duration = req.body.Duration; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle a show one view with id specified by query
exports.motel_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await motel.findById( req.query.id)
        res.render('moteldetail', {
            title: 'motel Detail', 
            toShow: result
        });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a motel.
// No body, no in path parameter, no query.
// Does not need to be async
exports.motel_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('motelcreate', { title: 'motel Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a motel. 
// query provides the id 
exports.motel_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await motel.findById(req.query.id) 
        res.render('motelupdate', { title: 'motel Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.motel_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await motel.findById(req.query.id) 
        res.render('moteldelete', { title: 'motel Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 