const mongoose = require("mongoose")
const c = require("../config.json");
module.exports.run = client => {
  
mongoose.connect(c.mongoDB, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify : false,
useCreateIndex : true
}).then(() => {
console.log("MongoDB connected!");
}).catch(a => console.error(a));

}