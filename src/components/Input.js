import React from "react"
import style from "styled-components"


const InputStyle = style.input`
  height: 58px;
  border: solid 1px gray;
  background-color: white;
  border-radius : 10px; 
  padding-left : 16px ;
  &::placeholder {
      color : #c4c4c4; 
      font-size : 16px
     
  }
  `

export function Input({ onChange, placeholder, value }) {
  return (
    <InputStyle
      type="text"
      id="name" name="name"
      value={value}
      placeholder={placeholder}
      onChange={onChange} />
  )
}
