import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { createReview } from "./GamerManager"
import "./ReviewForm.css"


export const ReviewForm = () => {
    const history = useHistory()
    const { gameId } = useParams()
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        const newReview = {
            content: content,
            game: gameId
        }

        createReview(newReview)
            .then(history.push(`/games/${gameId}`))
    }

    return (
        <>
            <div className="review_header">
                <h1>Add a Review</h1>
            </div>
            <section className="review_form_container">
                <form className="review_form" >
                    <div className="review_field">
                        <div className="review_control">
                            <textarea className="review_input" type="text" name="label" placeholder="Type your review here..." value={content} onChange={e => setContent(e.target.value)} />
                        </div>
                    </div>
                    <div className="review_button_container">
                        <button className="review_button" type="submit" onClick={handleSubmit}>Save</button>
                    </div>
                </form>
            </section>
        </>
    )
}