import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { getCurrentGame, getReviewsByGame } from "./GamerManager"
import { useHistory } from "react-router-dom"


export const GameDetails = () => {
    const [currentGame, setCurrentGame] = useState()
    const [reviews, setReviews] = useState([])
    const history = useHistory()
    const { gameId } = useParams()
    // get specific game from API

    useEffect(
        () => {
            getCurrentGame(gameId)
                .then(data => setCurrentGame(data))
        }, [gameId]
    )

    useEffect(
        () => {
            getReviewsByGame(gameId)
                .then(data => setReviews(data))
        }, [gameId]
    )

    return (
        currentGame ?
            <>
                <div className="game_details">
                    <div className="game__title">{currentGame.title} by {currentGame.designer}, released in {currentGame.year_released}</div>
                    <div className="game__description">{currentGame.description}</div>
                    <div className="game__players">{currentGame.number_of_players} players needed</div>
                    <div className="game__time_estimate">Takes roughly {currentGame.estimated_time_to_play} minutes on average to play</div>
                    <div className="game__age">Meant for ages {currentGame.age_recommendation} and up</div>
                    <button
                        className="create_review_button"
                        onClick={() => history.push(`/game/${gameId}/review`)}
                    >Review Game</button>
                </div>
                <div className="review_list">
                {
                    reviews ?
                        reviews.map(review => {
                            return <section key={`review--${review.id}`} className="review">
                                <div className="review_content">{review.content}</div>
                            </section>
                        })
                        : ""
                }
                </div>
            </>
            : ""
    )
}