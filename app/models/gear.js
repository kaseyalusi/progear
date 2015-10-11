// app/models/gear.js

var mongoose = require('mongoose');

var gearSchema = new mongoose.Schema({
    title: {type: String, default: ''},
    kind: {type: String, default:''}, //keyboard, mouse, etc
    /* this might be unnecessary.. we might want to write some backend
    * logic that handles the link creation dynamically.. basically I dont understand
    * how the amazon/ebay/whatever affiliate linking system works
    */
    link: {type: String, default:''}
});

module.exports = mongoose.model('Gear', gearSchema);
