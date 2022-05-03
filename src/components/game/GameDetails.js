import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { getCurrentGame } from "./GamerManager"


export const GameDetails = () => {
    const [currentGame, setCurrentGame] = useState()
    const gameId = useParams()
    // get specific game from API

    useEffect(
        () => {
            getCurrentGame(gameId.gameId)
                .then(data => setCurrentGame(data))
        }, [gameId]
    )

    return (
        currentGame ?
            <>
                <div className="game__title">{currentGame.title} by {currentGame.designer}, released in {currentGame.year_released}</div>
                <div className="game__description">{currentGame.description}</div>
                <div className="game__players">{currentGame.number_of_players} players needed</div>
                <div className="game__time_estimate">Takes roughly {currentGame.estimated_time_to_play} minutes on average to play</div>
                <div className="game__age">Meant for ages {currentGame.age_recommendation} and up</div>
            </>
            : ""
    )
}