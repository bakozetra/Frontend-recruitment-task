import React from "react"
import styled from 'styled-components'
const ButtonStyle = styled.button`
 height: 58px;`

function Button({ name, style, svg, onClick, onSubmit, alt }) {
    return (
        <ButtonStyle style={style} onSubmit={onSubmit} onClick={onClick} >{name} <img src={svg} alt={alt} /></ButtonStyle >
    )
}
export default Button