import React from "react";
import { Route } from "react-router-dom";
import { GameDetails } from "./game/GameDetails";
import { GameList } from "./game/GameList";
import { GameForm } from "./game/GameForm";
import { ReviewForm } from "./game/ReviewForm";


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/games/:gameId(\d+)">
                <GameDetails />
            </Route>
            <Route path="/games/new">
                <GameForm />
            </Route>
            <Route path="/game/:gameId(\d+)/review">
                <ReviewForm />
            </Route>
            <Route exact path="/games">
                <GameList />
            </Route>
        </>
    )
}