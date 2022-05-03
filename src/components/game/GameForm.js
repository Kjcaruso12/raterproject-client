import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getCategories } from "../category/CategoryManager"
import { createGame } from "./GamerManager"


export const GameForm = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([])

    const [newGame, setCurrentGame] = useState({
        year_released: 0,
        number_of_players: 0,
        estimated_time_to_play: 0,
        age_recommendation: 0,
        title: "",
        description: "",
        designer: "",
        categoryId: 0
    })

    useEffect(
        () => {
            getCategories()
            .then(data => setCategories(data))
    }, [])

    const changeGameState = (domEvent) => {
        const newForm = Object.assign({}, newGame)
        newForm[domEvent.target.name] = domEvent.target.value
        setCurrentGame(newForm)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={newGame.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={newGame.designer}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={newGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="num_of_players">Number of Players: </label>
                    <input type="number" name="number_of_players" required autoFocus className="form-control"
                        value={newGame.number_of_players}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released: </label>
                    <input type="number" name="year_released" required autoFocus className="form-control"
                        value={newGame.year_released}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimated_time_to_play">Estimated Time to Play in Minutes: </label>
                    <input type="number" name="estimated_time_to_play" required autoFocus className="form-control"
                        value={newGame.estimated_time_to_play}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="age_recommendation">Age Recommendation: </label>
                    <input type="number" name="age_recommendation" required autoFocus className="form-control"
                        value={newGame.age_recommendation}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <select className="form-control"
                name="categoryId"
                value={newGame.categoryId}
                placeholder="Select Game Type"
                onChange={changeGameState}>
                    <option name="categoryId" value={0} >Select a category</option>
                    {
                        categories?.map((type, index) => {
                            return <option key={index} name="categoryId" value={type.id}>{type.label}</option>
                        })
                    }
                </select>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        year_released: parseInt(newGame.year_released),
                        number_of_players: parseInt(newGame.number_of_players),
                        estimated_time_to_play: parseInt(newGame.estimated_time_to_play),
                        age_recommendation: parseInt(newGame.age_recommendation),
                        title: newGame.title,
                        description: newGame.description,
                        designer: newGame.designer,
                        categoryId: (newGame.categoryId)
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-4 icon-create">Create</button>
        </form>
    )
}