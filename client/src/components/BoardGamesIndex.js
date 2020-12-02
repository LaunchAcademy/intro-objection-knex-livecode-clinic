import React, { useState, useEffect } from "react"

import BoardGameTile from "./BoardGameTile"

const BoardGamesIndex = (props) => {
  const [boardGames, setBoardGames] = useState([])

  const getGames = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/boardgames")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setBoardGames(responseBody)
    } catch (err) {
      console.error("Error in fetch!")
      console.error(err)
    }
  }

  useEffect(() => {
    getGames()
  }, [])

  const boardGameComponents = boardGames.map((boardGame) => {
    return <BoardGameTile key={boardGame.id} gameData={boardGame} />
  })

  return (
    <div>
      <h1>Current Game Inventory</h1>
      <ul>{boardGameComponents}</ul>
    </div>
  )
}

export default BoardGamesIndex
