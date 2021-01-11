import express from "express"

import Boardgame from "../../../models/Boardgame.js"

const boardgamesRouter = new express.Router()

boardgamesRouter.get("/", async (req, res) => {
  try {
    const boardgames = await Boardgame.query()
    return res.status(200).json({ boardgames: boardgames })
  } catch (error) {
    return res.status(500).json({ errors: err })
  }
})

boardgamesRouter.get("/:id", async (req, res) => {
  try {
    const boardgame = await Boardgame.query().findById(req.params.id)
    return res.status(200).json({ boardgame: boardgame })
  } catch (error) {
    return res.status(500).json({ errors: err })
  }
})

export default boardgamesRouter
