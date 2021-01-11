import express from "express"

import BoardGame from "../../../models/BoardGame.js"

const boardGamesRouter = new express.Router()

boardGamesRouter.get("/", async (req, res) => {
  try {
    const boardgames = await BoardGame.query()
    // console.log(boardgames)
    res.status(200).json({boardGames: boardgames})
  } catch (error) {
    res.status(500).json({error: error})
  }
})

boardGamesRouter.get("/:id", async (req, res) => {
  try {
    const boardGame = await BoardGame.query().findById(req.params.id)
    res.status(200).json({ boardGame: boardGame})
  } catch (error) {
    res.status(500).json({error: error})
  }
})

export default boardGamesRouter