const mongoose = require("mongoose")


const Joke = new mongoose.mongoose.Schema({
    
    jokeType: {
        type: Number,
        required: true
    },
    
    setUp: {
        type: String,
        required: true
    },

    punchLine: {
        type: String,
        required: true
    }
    
    

})

module.exports = mongoose.model("joke", Joke)