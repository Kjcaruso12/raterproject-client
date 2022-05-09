import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai"
import { createRating } from "./GamerManager";
import "./StarRating.css"

export const StarRating = ({ gameId }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const newRating = {
        value: hover,
        game: parseInt(gameId)
    }

  return (
      <div className="star_rating">
          {[...Array(10)].map((star, index) => {
              index += 1
              return (
                  <button
                  id="rating_button"
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "on" : "off"}
                  onClick={
                      () => createRating(newRating, setRating(hover))}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}>
                  <span className="star">{AiFillStar()}</span>
                  </button>
              )
          })}
      </div>
  );
};

