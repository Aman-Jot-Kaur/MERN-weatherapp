const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ApiSchema = new Schema({
   city: {
        type: String,
        required: [true, "cityname is required"]
    }, 
 weather: {
        type: String,
        required: [true, "weather is required"]
    },
  temperature:{
    type: String,
    required: [true, "temperature is required"]
  }
})
const ApiModel = mongoose.model("apicollection", ApiSchema)
module.exports = ApiModel