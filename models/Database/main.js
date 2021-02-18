const mongoose = require('mongoose');
const uptime = mongoose.Schema({
userID: String,
adress: String
});
module.exports = mongoose.model("Uptime Links", uptime);