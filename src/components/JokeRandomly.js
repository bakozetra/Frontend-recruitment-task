import React from "react"
import style from "styled-components"

const Joke = style.h2`
      width : 439px;
      max-width : 100%;
      color : #34394f ;
      font-size : 18px ;
      font-style : italic
`
export function JokeRandomly({ joke }) {
    return (
        <div>
            <Joke><q>{joke}</q></Joke>
        </div>
    )
}
