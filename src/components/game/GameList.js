import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { getGames } from "./GamerManager"

export const GameList = (props) => {
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])


    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            {
                games?.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">
                            <Link to={`/games/${game.id}`}>{game.title} by {game.designer}, released in {game.year_released}</Link>
                        </div>
                        <div className="game__description">{game.description}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__time_estimate">Takes roughly {game.estimated_time_to_play} minutes on average to play</div>
                        <div className="game__age">Meant for ages {game.age_recommendation} and up</div>
                        {/* {
                            game.gamer_id ==
                        } */}
                    </section>
                })
            }
        </article>
    )
}