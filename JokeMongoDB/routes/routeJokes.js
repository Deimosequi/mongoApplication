/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - jokeType
 *         - setUp
 *         - punchLine
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the joke
 *         jokeType:
 *           type: number
 *           description: The joke type
 *         setUp:
 *           type: string
 *           description: The joke setup
 *         punchLine:
 *           type: string
 *           description: The joke punchline
 *       example:
 *         jokeType: 1
 *         setUp: Why did the chicken go to prison?
 *         punchLine: Crimes.
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Lists all the jokes
 *     tags: [Get Jokes]
 *     responses:
 *       200:
 *         description: The list of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *       409:
 *         description: Server error 409
 *
 * /add:
 *   post:
 *     summary: Create a new joke
 *     tags: [Post Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Joke'
 *     responses:
 *       201:
 *         description: The created joke.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       409:
 *         description: Server error 409
 *
 * /{jokeId1}:
 *   get:
 *     summary: Get the joke by id
 *     tags: [Get Joke by Id]
 *     parameters:
 *       - in: path
 *         name: jokeId1
 *         schema:
 *           type: string
 *         required: true
 *         description: The Joke ID
 *     responses:
 *       200:
 *         description: The joke response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *               responses:
 *       409:
 *         description: Server error 409
 *
 * /getByType/{jokeId2}:
 *   get:
 *     summary: Get the joke by type
 *     tags: [Get Joke by Type]
 *     parameters:
 *       - in: path
 *         name: jokeId2
 *         schema:
 *           type: string
 *         required: true
 *         description: The Joke Type
 *     responses:
 *       200:
 *         description: The joke response by type
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       409:
 *          description: Server error 409
 *
 * /update/{jokeId3}:
 *   put:
 *    summary: Update the joke by the id
 *    tags: [Update Joke]
 *    parameters:
 *      - in: path
 *        name: jokeId3
 *        schema:
 *          type: string
 *        required: true
 *        description: The Joke ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Joke'
 *    responses:
 *      200:
 *        Description: The joke was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      409:
 *         Description: Server error 409
 *
 * /delete/{jokeId4}:
 *  delete:
 *     summary: Remove the joke by id
 *     tags: [Delete Joke]
 *     parameters:
 *       - in: path
 *         name: jokeId4
 *         schema:
 *           type: string
 *         required: true
 *         description: The Joke ID
 *
 *     responses:
 *       200:
 *         description: The joke was deleted
 *       409:
 *         description: Server error 409
 */


const express = require("express")
const { postJoke, getJoke, getJokesByType, getJokes, updateJoke, deleteJokes} = require("../controllers/controlJokes")


router = express.Router()

router.post("/add", postJoke)
router.get("/", getJokes)
router.get("/:jokeId", getJoke)
router.get("/getByType/:jokeId", getJokesByType)
router.put("/update/:jokeId", updateJoke)
router.delete("/delete/:jokeId", deleteJokes)

module.exports = router