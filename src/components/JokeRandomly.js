import React from "react"
import style from "styled-components"

const Joke = style.h2`
      width : 439px;
      max-width : 100%;
`
export function JokeRandomly({ joke }) {
    return (
        <div>
            <Joke>{joke}</Joke>
        </div>
    )
}
