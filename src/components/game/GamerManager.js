export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`
        }
    })
        .then(response => response.json())
}

export const getCurrentUser = (token) => {
    return fetch(`http://localhost:8000/users/${token}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`
        }
    })
        .then(response => response.json())
}

export const getCurrentGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`
        }
    })
        .then(response => response.json())
}

export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`
        }
    })
        .then(response => response.json())
}

export const getRatingsByGame = (gameId) => {
    return fetch(`http://localhost:8000/ratings?game=${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`
        }
    })
        .then(response => response.json())
}

export const getReviewsByGame = (gameId) => {
    return fetch(`http://localhost:8000/reviews?game=${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    })
        .then(getGames)
}

export const createRating = (rating, setRating) => {
    return fetch("http://localhost:8000/ratings", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rating)
    })
        .then(setRating)
}

export const createReview = (review) => {
    return fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
        .then(getReviews)
}

export const putGame = (game) => {
    return fetch(`http://localhost:8000/games/${game.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    })
}

export const deleteGame = (gameId) => {
    return fetch(`http://localhost:8000/posts/${gameId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("tu_token")}`
        }
    });
};