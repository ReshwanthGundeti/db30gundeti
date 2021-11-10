const mongoose = require("mongoose")
const motelSchema = mongoose.Schema({

motel_type:{
    type: String,
    minLength: 3,
    maxLength: 100
},

Duration : {
    type:Number,
},

Cost: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("motel",motelSchema)








