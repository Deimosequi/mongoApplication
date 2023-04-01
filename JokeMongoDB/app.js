const jokes = require("./routes/routeJokes")
const { urlencoded } = require("express")
const mongoose = require("mongoose")
const express = require("express")
const app = express()

swaggerUi = require("swagger-ui-express")
swaggerJsdoc = require("swagger-jsdoc")
bodyParser = require("body-parser")

require("dotenv/config")


//middle wares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/jokes", jokes)

//mongoose DB connection
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connection to DB establish")
})

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MongoDB API with Swagger",
            version: "0.1.0",
            description:
                "This is a get joke API application made with Express and documented with Swagger",
            license: {},
            contact: {
                name: "Dhanushka",
                email: "Dhanushkagurusinghe03@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:5000/jokes",
                url: "http://20.224.66.12:5000/jokes",

            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

app.listen(5000, () => {
    console.log("Server running in port 5000...")
})