import React from "react"
import styled from 'styled-components'
const ButtonStyle = styled.button`
 height: 58px;`

function Button({ name, style, svg, onClick, onSubmit }) {
    return (
        <ButtonStyle style={style} onSubmit={onSubmit} onClick={onClick} >{name} <img src={svg} /></ButtonStyle >
    )
}
export default Button