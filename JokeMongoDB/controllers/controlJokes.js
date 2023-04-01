const Joke = require("../models/modelJokes")


//add jokes to DB
const postJoke = async (req, res) => {
    try{
        const {jokeType} = req.body
        const {setUp} = req.body
        const {punchLine} = req.body

        const newJoke = new Joke({
            jokeType: jokeType,
            setUp: setUp,
            punchLine: punchLine,
            
        })

        const savedJoke = await newJoke.save()
        res.status(201).json({success: true, data: savedJoke})

    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
}

//get all the joke
const getJokes = async (req, res) => {
    try{
        const jokes = await Joke.find()
        res.status(200).json({success: true, data: jokes})

    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
}

//get joke by id
const getJoke = async (req, res) => {
    const jokeId = req.params.jokeId
    try{
        const joke = await Joke.find({_id: jokeId})
        res.status(200).json({success: true, data: joke})

    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
}



//get jokes with type
const getJokesByType = async (req, res) => {
    try{
        const joke = await Joke.find({jokeType: req.params.jokeId})
        res.status(200).json({success: true, data: joke})
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
}

//update joke
const updateJoke = async (req, res) => {
    const jokeId = req.params.jokeId
    const {jokeType} = req.body
    const {setUp} = req.body
    const {punchLine} = req.body

    try{
        const joke = await Joke.updateOne({_id: jokeId}, {$set: {
            jokeType: jokeType,
            setUp: setUp,
            punchLine: punchLine

        }})


        const updateJokeData = await Joke.find({_id: jokeId})
        res.status(200).json({success: true, data: updateJokeData})
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
}


//delete jokes
const deleteJokes = async (req, res) => {
    const jokeId = req.params.jokeId

    try{
        await Joke.remove({_id: jokeId})
        res.status(200).json({success: true, data: "Joke Deleted"})
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
}

module.exports = {
    postJoke,
    getJoke,
    getJokes,
    getJokesByType,
    updateJoke,
    deleteJokes
}