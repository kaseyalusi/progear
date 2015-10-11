// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');


var proSchema = new mongoose.Schema({
    name: {type : String, default: ''},
    sport: {type : String, default: ''},
    age: {type : String, default: ''},
    team: {type: String, default: ''},
    gear: [{type: mongoose.Schema.Types.ObjectId, ref: 'Gear'}]
    // TODO Images
});
// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Pro', proSchema);
