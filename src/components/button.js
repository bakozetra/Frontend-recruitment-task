import React from "react"
import styled from 'styled-components'
const ButtonStyle = styled.button`
 height: 58px; 
 color : #c4c4c4;
 font-size : 16px`


function Button({ name, style, svg, onClick, onSubmit, alt }) {
    return (
        <ButtonStyle style={style} onSubmit={onSubmit} onClick={onClick}> {name} <img src={svg} alt={alt} /></ButtonStyle >
    )
}
export default Button